<?php
// header("Content-Type: application/json");

// if ($_SERVER["REQUEST_METHOD"] === "POST") {
//     $response = [];

//     foreach ($_POST as $key => $value) {
//         $response[$key] = $value;
//     }

//     echo json_encode(["status" => "success", "message" => "Form submitted successfully!", "data" => $response]);
// } else {
//     echo json_encode(["status" => "error", "message" => "Invalid request"]);
// }
header("Content-Type: application/json");

// Connect to the database
$conn = new mysqli("localhost", "root", "", "ruvisa");

if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Connection failed: " . $conn->connect_error]));
}

// Read JSON input; if none, fallback to $_POST
$input = file_get_contents("php://input");
$data = json_decode($input, true);
if (!$data) {
    $data = $_POST;
}

// Determine number of visitors by looking for keys "first_name1", "first_name2", etc.
$visitorIndexes = [];
foreach ($data as $key => $value) {
    if (preg_match('/^first_name(\d+)$/', $key, $matches)) {
        $visitorIndexes[] = (int)$matches[1];
    }
}
$maxVisitorIndex = !empty($visitorIndexes) ? max($visitorIndexes) : 0;
if ($maxVisitorIndex < 1) {
    echo json_encode(["status" => "error", "message" => "No visitor data provided."]);
    exit;
}

// Insert main visa_requests record (excluding citizenship and visa_type)
$RussianConsulate    = isset($data['Russian_Consulate']) ? $conn->real_escape_string($data['Russian_Consulate']) : "";
$paymentStatus       = isset($data['payment_status']) ? $conn->real_escape_string($data['payment_status']) : "";
$currency            = isset($data['currency']) ? $conn->real_escape_string($data['currency']) : "";
$Email               = isset($data['Email']) ? $conn->real_escape_string($data['Email']) : "";
$Phone               = isset($data['Phone']) ? $conn->real_escape_string($data['Phone']) : "";
$SpecialInstructions = isset($data['Special_instructions']) ? $conn->real_escape_string($data['Special_instructions']) : "";
$medicalInsurance    = isset($data['medical_insurance']) ? $conn->real_escape_string($data['medical_insurance']) : "";

// Total visitors is the max visitor index
$totalVisitors = $maxVisitorIndex;

$stmt = $conn->prepare("
    INSERT INTO visa_requests (
        `Russian Consulate`,
        total_visitors,
        payment_status,
        currency,
        Email,
        Phone,
        Special_instrucions,
        medical_insurance
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
");
$stmt->bind_param("sissssss",
    $RussianConsulate,
    $totalVisitors,
    $paymentStatus,
    $currency,
    $Email,
    $Phone,
    $SpecialInstructions,
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
            return "Double-entry tourist visa";
        case "12":
            return "Business visa";
        default:
            return "Unknown visa type";
    }
}

// Loop through each visitor from 1 to $maxVisitorIndex
for ($i = 1; $i <= $maxVisitorIndex; $i++) {
    // Retrieve visitor data from flat keys with suffix $i
    $firstName    = isset($data["first_name$i"]) ? $conn->real_escape_string($data["first_name$i"]) : "";
    $lastName     = isset($data["last_name$i"]) ? $conn->real_escape_string($data["last_name$i"]) : "";
    $visaTypeCode = isset($data["visa-type$i"]) ? $conn->real_escape_string($data["visa-type$i"]) : "";
    $visaTypeText = convertVisaType($visaTypeCode);
    // Build date_of_birth from dob_day, dob_month, dob_year
    $dob_day   = isset($data["dob_day$i"]) ? $data["dob_day$i"] : "00";
    $dob_month = isset($data["dob_month$i"]) ? $data["dob_month$i"] : "00";
    $dob_year  = isset($data["dob_year$i"]) ? $data["dob_year$i"] : "0000";
    $dateOfBirth = sprintf("%04d-%02d-%02d", $dob_year, $dob_month, $dob_day);
    // Gender: key "Gender-$i"
    $gender = isset($data["Gender-$i"]) ? $conn->real_escape_string($data["Gender-$i"]) : "";
    // Citizenship: key "Citizenship$i"
    $citizenshipVisitor = isset($data["Citizenship$i"]) ? $conn->real_escape_string($data["Citizenship$i"]) : "";
    // Stay dates: keys "stay_from$i" and "stay_to$i"
    $stayFrom = isset($data["stay_from$i"]) ? $conn->real_escape_string($data["stay_from$i"]) : "";
    $stayTo   = isset($data["stay_to$i"]) ? $conn->real_escape_string($data["stay_to$i"]) : "";
    // date_of_arrival: key "Date-of-arrival-in-Russia-$i"
    $dateOfArrival = isset($data["Date-of-arrival-in-Russia-$i"]) ? $conn->real_escape_string($data["Date-of-arrival-in-Russia-$i"]) : "";
    // For passport_number, assume only visitor 1 has it and key is "Passport_number"
    $passportNumber = ($i == 1 && isset($data["Passport_number"])) ? $conn->real_escape_string($data["Passport_number"]) : "";
    // valid_through date from valid_day$i, valid_month$i, valid_year$i
    $valid_day   = isset($data["valid_day$i"]) ? $data["valid_day$i"] : "00";
    $valid_month = isset($data["valid_month$i"]) ? $data["valid_month$i"] : "00";
    $valid_year  = isset($data["valid_year$i"]) ? $data["valid_year$i"] : "0000";
    $validThrough = sprintf("%04d-%02d-%02d", $valid_year, $valid_month, $valid_day);
    // City-of-getting-visa: key "City-of-getting-visa-$i"
    $cityOfGettingVisa = isset($data["City-of-getting-visa-$i"]) ? $conn->real_escape_string($data["City-of-getting-visa-$i"]) : "";
    
    // The remaining visitor fields (country_of_getting_visa, date_of_arrival already set, passport_issued, country_of_living, city_of_living, country_of_birth, city_of_birth, employer_company_name, company_business_type, employer_position, company_phone, company_address) are set to empty strings
    $countryOfGettingVisa = "";
    // $date_of_arrival already used above
    $passportIssued       = "";
    $countryOfLiving      = "";
    $cityOfLiving         = "";
    $countryOfBirth       = "";
    $cityOfBirth          = "";
    $employerCompanyName  = "";
    $companyBusinessType  = "";
    $employerPosition     = "";
    $companyPhone         = "";
    $companyAddress       = "";
    $imagePath = "";
    if (isset($_FILES["Passport-main-page-$i"])) {
        $uploadDir = "../uploads/"; // Change this to your desired directory
        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0777, true);
        }
        echo "sfsf";
        $imageName = basename($_FILES["Passport-main-page-$i"]["name"]);
        $targetFile = $uploadDir . time() . "_" . $imageName;

        if (move_uploaded_file($_FILES["Passport-main-page-$i"]["tmp_name"], $targetFile)) {
            $imagePath = $conn->real_escape_string($targetFile);
        }
        echo "${imagePath} , ${targetFile} ,${imageName}";
    }
    $passportMainPage     = $imagePath;
    
    // Prepare the visitor insert query (25 placeholders)
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
            country_of_getting_visa,
            date_of_arrival,
            passport_number,
            passport_issued,
            valid_through,
            city_of_getting_visa,
            country_of_living,
            city_of_living,
            country_of_birth,
            city_of_birth,
            employer_company_name,
            company_business_type,
            employer_position,
            company_phone,
            company_address,
            passport_main_page
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ");
    if (!$stmt) {
        die(json_encode(["status" => "error", "message" => "Prepare visitor failed: " . $conn->error]));
    }
    // Bind 25 parameters: 1 integer and 24 strings.
    $stmt->bind_param(
        "issssssssssssssssssssssss",
        $orderId,
        $firstName,
        $lastName,
        $visaTypeText,
        $dateOfBirth,
        $gender,
        $citizenshipVisitor,
        $stayFrom,
        $stayTo,
        $countryOfGettingVisa,
        $dateOfArrival,
        $passportNumber,
        $passportIssued,
        $validThrough,
        $cityOfGettingVisa,
        $countryOfLiving,
        $cityOfLiving,
        $countryOfBirth,
        $cityOfBirth,
        $employerCompanyName,
        $companyBusinessType,
        $employerPosition,
        $companyPhone,
        $companyAddress,
        $passportMainPage
    );
    $stmt->execute();
    $stmt->close();
}

// Optionally, insert cities from keys like "city1", "city2", etc.
$cityIndexes = [];
foreach ($data as $key => $value) {
    if (preg_match('/^city(\d+)$/', $key, $matches)) {
        $cityIndexes[] = (int)$matches[1];
    }
}
if (!empty($cityIndexes)) {
    $maxCityIndex = max($cityIndexes);
    for ($i = 1; $i <= $maxCityIndex; $i++) {
        $cityKey = "city" . $i;
        if (isset($data[$cityKey]) && !empty($data[$cityKey])) {
            $cityVal = $conn->real_escape_string($data[$cityKey]);
            $stmt = $conn->prepare("INSERT INTO cities (order_id, city) VALUES (?, ?)");
            if ($stmt) {
                $stmt->bind_param("is", $orderId, $cityVal);
                $stmt->execute();
                $stmt->close();
            }
        }
    }
}

header("Content-Type: text/html"); // Ensure output is interpreted as HTML
echo '<script>
    alert("Order submitted successfully!");
    </script>';
    // window.location.href = "index.html";

$conn->close();
?>