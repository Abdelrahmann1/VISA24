<?php
header("Content-Type: application/json");

// Connect to the database
// $conn = new mysqli("localhost", "root", "", "ruvisa")
$conn = new mysqli("localhost", "u3008062_admin", "rA8dA9wH1eyG3jQ0", "u3008062_books");
;
if ($conn->connect_error) {
  die(json_encode(["status" => "error", "message" => "Connection failed: " . $conn->connect_error]));
}

// Read JSON input
$input = file_get_contents("php://input");
$data = json_decode($input, true);
if (!$data) {
  echo json_encode(["status" => "error", "message" => "No data provided."]);
  exit;
}

// Check for visitor data in the array
if (!isset($data['visitors']) || !is_array($data['visitors']) || count($data['visitors']) === 0) {
  echo json_encode(["status" => "error", "message" => "No visitor data provided."]);
  exit;
}
$totalVisitors = count($data['visitors']);

// Main visa_requests fields (defaults if not provided)
$paymentStatus       = isset($data['payment_status'])       ? $conn->real_escape_string($data['payment_status'])       : "";
$currency            = isset($data['currency'])             ? $conn->real_escape_string($data['currency'])             : "";
$email               = isset($data['email'])                ? $conn->real_escape_string($data['email'])                : "";
$phone               = isset($data['phone'])                ? $conn->real_escape_string($data['phone'])                : "";
$specialInstructions = isset($data['specialInstructions']) ? $conn->real_escape_string($data['specialInstructions']) : "";
$medicalInsurance    = isset($data['medicalInsurance'])    ? $conn->real_escape_string($data['medicalInsurance'])    : "";

// Insert main visa_requests record
$stmt = $conn->prepare("
  INSERT INTO visa_requests (
    total_visitors,
    payment_status,
    currency,
    email,
    phone,
    Special_instrucions,
    medical_insurance
  ) VALUES ( ?, ?, ?, ?, ?, ?, ?)
");
$stmt->bind_param("issssss",
  $totalVisitors,
  $paymentStatus,
  $currency,
  $email,
  $phone,
  $specialInstructions,
  $medicalInsurance
);
$stmt->execute();
$orderId = $stmt->insert_id;
$stmt->close();

// Function to convert numeric visa type to full text
function convertVisaType($code) {
  switch ($code) {
    case "1":
      return "Single-entry tourist visa";
    case "3":
      return "Multiple-entry tourist visa";
    case "12":
      return "Business visa";
    default:
      return "Unknown visa type";
  }
}

// Loop through each visitor in the visitors array
foreach ($data['visitors'] as $index => $visitor) {
  $visitorNum = $index + 1;
  
  $firstName    = isset($visitor['name'])         ? $conn->real_escape_string($visitor['name'])         : "";
  $lastName     = isset($visitor['familyName'])   ? $conn->real_escape_string($visitor['familyName'])   : "";
  $visaTypeCode = isset($visitor['visaType'])       ? $conn->real_escape_string($visitor['visaType'])       : "";
  $visaTypeText = convertVisaType($visaTypeCode);

  // Build date_of_birth from dobDay, dobMonth, dobYear
  // $dob_day   = isset($visitor['Birth'])   ? $visitor['Birth']   : "00";
  // $dob_month = isset($visitor['dobMonth']) ? $visitor['dobMonth'] : "00";
  // $dob_year  = isset($visitor['dobYear'])  ? $visitor['dobYear']  : "0000";
  $dateOfBirth =  isset($visitor['Birth'])   ? $visitor['Birth']   : "00";

  $gender             = isset($visitor['gender'])        ? $conn->real_escape_string($visitor['gender'])        : "";
  $citizenshipVisitor = isset($visitor['citizenship'])   ? $conn->real_escape_string($visitor['citizenship'])   : "";
  $stayFrom           = isset($visitor['stayFrom'])      ? $conn->real_escape_string($visitor['stayFrom'])      : "";
  $stayTo             = isset($visitor['stayTo'])        ? $conn->real_escape_string($visitor['stayTo'])        : "";
  
  // Date of arrival not provided in JSON; default to empty
  
  // Passport number provided only for first visitor (if any)
  // $passportNumber = "";
  // if ($visitorNum == 1 && isset($visitor['passportNumber'])) {
    $passportNumber = $conn->real_escape_string($visitor['passportNumber']);
  // }
  
  // Build valid_through date from validUntilDay, validUntilMonth, validUntilYear
  // $valid_day   = isset($visitor['validUntilDay'])   ? $visitor['validUntilDay']   : "00";
  // $valid_month = isset($visitor['validUntilMonth']) ? $visitor['validUntilMonth'] : "00";
  // $valid_year  = isset($visitor['validUntilYear'])  ? $visitor['validUntilYear']  : "0000";
  $city  = isset($visitor['city'])  ? $visitor['city']  : "";
  $validThrough = isset($visitor['valid'])   ? $visitor['valid']   : "0000:0000:0000";


  // Prepare the visitor insert query
  $stmt = $conn->prepare("
  INSERT INTO visitor (
    request_id,
    first_name,
    Family_name,
    visa_type,
    date_of_birth,
    gender,
    citizenship,
    Stay_from,
    Stay_to,
    passport_number,
    valid_through,
    city
  ) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? ,?)
");

if (!$stmt) {
  die(json_encode(["status" => "error", "message" => "Prepare visitor failed: " . $conn->error]));
}

$stmt->bind_param(
  "isssssssssss",
  $orderId,
  $firstName,
  $lastName,
  $visaTypeText,
  $dateOfBirth,
  $gender,
  $citizenshipVisitor,
  $stayFrom,
  $stayTo,
  $passportNumber,
  $validThrough,
  $city
);

  $stmt->execute();
  $stmt->close();
}

// Process cities if provided as an array
// if (isset($data['cities']) && is_array($data['cities'])) {
//   foreach ($data['cities'] as $cityVal) {
//     if (!empty($cityVal)) {
//       $cityVal = $conn->real_escape_string($cityVal);
//       $stmt = $conn->prepare("INSERT INTO cities (order_id, city) VALUES (?, ?)");
//       if ($stmt) {
//         $stmt->bind_param("is", $orderId, $cityVal);
//         $stmt->execute();
//         $stmt->close();
//       }
//     }
//   }
// }

echo json_encode(["status" => "success", "message" => "Data inserted successfully"]);
$conn->close();
?>
