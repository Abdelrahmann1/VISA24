const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const russianCities = [
  "Moscow",
  "Saint Petersburg",
  "Novosibirsk",
  "Yekaterinburg",
  "Nizhny Novgorod",
  "Kazan",
  "Chelyabinsk",
  "Omsk",
  "Samara",
  "Rostov-on-Don",
  "Ufa",
  "Krasnoyarsk",
  "Perm",
  "Voronezh",
  "Volgograd",
  "Krasnodar",
  "Saratov",
  "Tyumen",
  "Tolyatti",
  "Izhevsk",
  "Barnaul",
  "Ulyanovsk",
  "Irkutsk",
  "Khabarovsk",
  "Yaroslavl",
  "Vladivostok",
  "Makhachkala",
  "Tomsk",
  "Orenburg",
  "Kemerovo",
  "Novokuznetsk",
  "Ryazan",
  "Astrakhan",
  "Penza",
  "Lipetsk",
  "Kirov",
  "Cheboksary",
  "Tula",
  "Kaliningrad",
  "Balashikha",
  "Kursk",
  "Stavropol",
  "Ulan-Ude",
  "Tver",
  "Magnitogorsk",
  "Ivanovo",
  "Bryansk",
  "Sochi",
  "Belgorod",
  "Surgut",
  "Vladimir",
  "Arkhangelsk",
  "Chita",
  "Kaluga",
  "Smolensk",
  "Volzhsky",
  "Cherepovets",
  "Vladikavkaz",
  "Murmansk",
  "Saransk",
  "Yakutsk",
  "Tambov",
  "Nizhny Tagil",
  "Taganrog",
  "Kostroma",
  "Petrozavodsk",
  "Sterlitamak",
  "Nizhnevartovsk",
  "Kamyshin",
  "Norilsk",
  "Biysk",
  "Shakhty",
  "Orsk",
  "Novorossiysk",
  "Dzerzhinsk",
  "Bratsk",
  "Angarsk",
  "Engels",
  "Blagoveshchensk",
  "Veliky Novgorod",
  "Stary Oskol",
  "Khimki",
  "Pskov",
  "Severodvinsk",
  "Armavir",
  "Zlatoust",
  "Podolsk",
  "Mytishchi",
  "Korolyov",
  "Syzran",
  "Lyubertsy",
  "Rybinsk",
  "Prokopyevsk",
  "Nizhnekamsk",
  "Berezniki",
  "Yoshkar-Ola",
  "Salavat",
  "Elektrostal",
  "Miass",
  "Almetyevsk",
  "Pyatigorsk",
  "Rubtsovsk",
  "Kopeysk",
  "Nalchik",
  "Bataisk",
  "Derbent",
  "Kislovodsk",
  "Serpukhov",
  "Kamensk-Uralsky",
  "Novomoskovsk",
  "Odintsovo",
  "Nevinnomyssk",
  "Chaykovsky",
  "Zhukovsky",
  "Novocheboksarsk",
  "Khasavyurt",
  "Yevpatoria",
  "Obninsk",
];
document.addEventListener("click", function (event) {
  if (event.target.closest(".dropdown-item")) {
    let item = event.target.closest(".dropdown-item"); // Get the clicked item
    let dropdown = item.closest(".dropdown"); // Find the closest dropdown
    let button = dropdown.querySelector(".dropdown-toggle"); // Find the button

    let newText = item.textContent.trim(); // Get the text
    let newImgSrc = item.getAttribute("data-img"); // Get the new image source

    // Update button content
    if (newImgSrc) {
      button.innerHTML = `<img src="${newImgSrc}" alt="${newText}" width="20" height="20">${newText}`;
    } else {
      button.innerHTML = `${newText}`;
    }
  }
});
// file2.js
const params = new URLSearchParams(window.location.search);
let visitorCount = params.get("numofvisitors");
let Citizenship = params.get("Citizenship");
let Currency = params.get("Currency");
let Language = params.get("Language");
let visatype = params.get("visatype");
let cityCount = 1;
let visitorContainer = document.getElementById("visitor-container");

function addVisitor(index) {
  if (index > visitorCount) {
    visitorCount = index;
    calcprice();

  }

  // Remove previous "Add Visitor" button
  const prevButton = document.querySelector(".add-visitor-btn");
  if (prevButton) prevButton.remove();

  const visitorDiv = document.createElement("div");
  visitorDiv.className = "visitor-section";
  visitorDiv.innerHTML = `
<div class="visitor-header">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M18 2H6C4.34 2 3 3.33 3 4.97V15.88C3 17.52 4.34 18.85 6 18.85H6.76C7.56 18.85 8.32 19.16 8.88 19.72L10.59 21.41C11.37 22.18 12.64 22.18 13.42 21.41L15.13 19.72C15.69 19.16 16.46 18.85 17.25 18.85H18C19.66 18.85 21 17.52 21 15.88V4.97C21 3.33 19.66 2 18 2ZM12 5.75C13.29 5.75 14.33 6.79 14.33 8.08C14.33 9.37 13.29 10.41 12 10.41C10.71 10.41 9.67 9.36 9.67 8.08C9.67 6.79 10.71 5.75 12 5.75ZM14.68 15.06H9.32C8.51 15.06 8.04 14.16 8.49 13.49C9.17 12.48 10.49 11.8 12 11.8C13.51 11.8 14.83 12.48 15.51 13.49C15.96 14.16 15.48 15.06 14.68 15.06Z" fill="white"/>
    </svg> Visitor (${index}) details
    <button class="add-visitor-btn">+ Add a visitor</button>
</div>
<div class="visitor-body">
    <label>Your Name</label>
    <input type="text"  id="name${index}" placeholder="Name, middle name"required>
    
    <label>Family Name</label>
    <input type="text" id ="family-name${index}" placeholder="Name, middle name"required>
   <label>Visa type</label>
    <select id="visa-type${index}" name="visa-type">
        <option value="0">Select your visa type</option>
        <option value="1">Single-entry tourist visa</option>
        <option value="3">Double-entry tourist visa</option>
        <option value="12">Business visa</option>
    </select>

    <div class="business-fields-${index}">
    <label>Length of your stay</label>
    <div class="stay">
        <label for="from${index}">from</label>

        <input type="date" id="from${index}" class="date-placeholder"required name="stay_from">
        <label for="to${index}"">to</label>

        <input type="date" id="to${index}" class="date-placeholder"required name="stay_to">
    </div>

    <label>Date of Birth</label>
    <div class="date">
        <label for="day-birth${index}" >Day</label>
        <select id="day-birth${index}"name="dob_day"></select>

        <label for="month-birth${index}">Month</label>
        <select id="month-birth${index}"name="dob_month"></select>

        <label for="year-birth${index}">Year</label>
        <select id="year-birth${index}"name="dob_year"></select>
    </div>
    
    <label>Gender</label>
    <div class="gender">
        <div>
            <input type="radio" id="gender-${index}" name="Gender" value="Male" nam id="male-${index}"required checked >
            <label for="male-${index}"> Male</label>
        </div>
        <div>
            <input type="radio" id="female-${index}"name="Gender" id="gender-${index}" value="Female"required>
            <label for="female-${index}">Female</label>
        </div>
    </div>
    
    <label>Citizenship</label>
    
        <input type="text" class="count" id="citizenship${index}"required name="Citizenship">

    <label>Passport number</label>
    <input type="text"required name="Passport number">

    <label>Valid through</label>
    <div class="date">
        <label for="day-valid${index}">Day</label>
        <select id="day-valid${index}" name="valid_day"></select>

        <label for="month-valid${index}">Month</label>
        <select id="month-valid${index}" name="valid_month"></select>

        <label for="year-valid${index}">Year</label>
        <select id="year-valid${index}" name="valid_year"></select>
    </div>
</div>
`;
  // $(`citizenship${index}`).countrySelect();
  // document.querySelector(`#citizenship${index}`).countrySelect();

  visitorContainer.appendChild(visitorDiv);

  visitorDiv
    .querySelector(".add-visitor-btn")
    .addEventListener("click", () => addVisitor(index + 1));

  populateDropdown(`day-birth${index}`, 1, 31, null, "day");
  populateDropdown(`day-valid${index}`, 1, 31, null, "day");
  populateDropdown(`month-birth${index}`, 1, 12, monthNames, "month");
  populateDropdown(`month-valid${index}`, 1, 12, monthNames, "month");
  populateDropdowndate(
    `year-birth${index}`,
    new Date().getFullYear() - 70,
    new Date().getFullYear(),
    null,
    "year"
  );
  populateDropdown(
    `year-valid${index}`,
    new Date().getFullYear() - 5,
    new Date().getFullYear() + 15,
    null,
    "year"
  );

  let visaTypeSelect = document.getElementById(`visa-type${index}`);
  let fromInput = document.getElementById(`from${index}`);
  let toInput = document.getElementById(`to${index}`);

  visaTypeSelect.addEventListener("change", () =>
    updateToDate(visaTypeSelect, fromInput, toInput)
  );
  fromInput.addEventListener("change", () =>
    updateToDate(visaTypeSelect, fromInput, toInput)
  );

  visaTypeSelect.addEventListener("change", () => {
    updateToDate(visaTypeSelect, fromInput, toInput);

    // Check if business visa is selected
    if (visaTypeSelect.value === "12") {
      addBusinessFields(index);
    } else {
      removeBusinessFields(index);
    }
  });
}

function addBusinessFields(index) {
  let visitorBody = document
    .querySelector(`#visa-type${index}`)
    .closest(".visitor-body");

  // Check if fields already exist
  if (document.getElementById(`business-fields-${index}`)) return;

  let businessFields = document.createElement("div");
  businessFields.id = `business-fields-${index}`;
  businessFields.innerHTML = `
    <label>City of getting visa</label>
    <input type="text" id="City-of-getting-visa-${index}" placeholder="Enter City of getting visa"required>
    
    <label>Date of arrival in Russiae</label>
    <input type="date" id="Date-of-arrival-in-Russia-${index}" placeholder="Date of arrival in Russia"required>

    <label>Passport main page</label>
    <input type="file" id="Passport-main-page-${index}" placeholder="Passport main page"required>
  `;

  visitorBody.appendChild(businessFields);
}

function removeBusinessFields(index) {
  let businessFields = document.getElementById(`business-fields-${index}`);
  if (businessFields) {
    businessFields.remove();
  }
}

function populateDropdown(id, start, end, labels = null, d = null) {
  let select = document.getElementById(id);
  let option = document.createElement("option");
  option.value = "0";
  option.textContent = "select " + d;
  select.appendChild(option);
  for (let i = start; i <= end; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = labels ? labels[i - 1] : i;
    select.appendChild(option);
  }
}
function populateDropdowndate(id, start, end, labels = null, d = null) {
  let select = document.getElementById(id);
  let option = document.createElement("option");
  option.value = "0";
  option.textContent = "select " + d;
  select.appendChild(option);
  for (let i = end; i >= start; i--) {
    // Fix: Decrement i in loop condition
    let option = document.createElement("option");
    option.value = i;
    option.textContent = labels ? labels[i - start] : i; // Adjust index for labels
    select.appendChild(option);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".count").forEach(function (element) {
    // Listen for changes and alert the selected country
    element.addEventListener("change", function () {
      let countryData =
        window.countrySelect &&
        $(element).countrySelect("getSelectedCountryData");
      if (countryData && countryData.name) {
        alert("Selected Country: " + countryData.name);
      } else {
        alert("No country selected");
      }
    });
  });
});

// document.getElementById("currency").addEventListener("change", function () {
//   alert('Currency changed'); // Debugging alert
//   let selectedCurrency = this.value;
//   let amountElements = document.querySelectorAll(".totalAmount");

//   amountElements.forEach(element => {
//       let amount = 150; // Update this with actual conversion logic if needed
//       element.textContent = `Total Amount: ${amount} ${selectedCurrency}`;
//   });
// });
function updateToDate(v, f, toInput) {
  let visaType = v.value;
  let fromDateValue = f.value;

  if (!visaType || !fromDateValue) {
    toInput.value = "";
    toInput.removeAttribute("max");
    return;
  }

  let fromDate = new Date(fromDateValue);
  let toDate = new Date(fromDate);
  toDate.setMonth(toDate.getMonth() + parseInt(visaType));

  let maxDate = toDate.toISOString().split("T")[0];
  toInput.value = maxDate;
  toInput.setAttribute("max", maxDate);
}

for (let index = 1; index <= visitorCount; index++) {
  addVisitor(index);
}

const cityContainer = document.getElementById("city-container");
const cityContainerbtn = document.getElementById("city-containerbtn");

function addcity(index) {
  cityContainerbtn.onclick = () => {
    cityCount += 1;
    addcity(cityCount);
  };
  const citydiv = document.createElement("div");
  citydiv.className = "city-section";
  citydiv.innerHTML = `
<div class="city-header">
<div class="city-body">
    <label>City</label>
      <select id="city${index}" name="city" required>
      </select>
    
    </div>
    <h1>City Num (${index}) <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg></h1></div>`;

  cityContainer.appendChild(citydiv);

  const citySelect = document.getElementById(`city${index}`);

  russianCities.forEach((city) => {
    let option = document.createElement("option");
    option.value = city;
    option.textContent = city;
    citySelect.appendChild(option);
  });
}

for (let index = 1; index <= cityCount; index++) {
  addcity(index);
}

// alert
// (visitorCount + " " + Citizenship + " " + Currency + " " + Language + " " + visatype);

function checkVisibility() {
  const amountBox = document.querySelector(".amount-boxs");
  const normalPosition = document.querySelector(".amount-boxabs");

  if (
    normalPosition.getBoundingClientRect().top < window.innerHeight &&
    normalPosition.getBoundingClientRect().bottom > 0
  ) {
    amountBox.classList.add("hidden");
  } else {
    amountBox.classList.remove("hidden");
  }
}
document.getElementById("agreeTerms").addEventListener("change", function () {
  console.log("Checkbox changed:", this.checked);
});

window.addEventListener("scroll", checkVisibility);
window.addEventListener("resize", checkVisibility);
document.addEventListener("DOMContentLoaded", checkVisibility);
document
  .getElementById("submitButton")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default form submission

    let isValid = true;
    let missingFields = [];

    // Select all required fields within #content
    let requiredFields = document.querySelectorAll(
      "#content input[required], #content select, #content input[type=radio]"
    );
    

    
    requiredFields.forEach(function (field) {
      let fieldValue = field.value;
      let fieldLabel =
        field.closest("div")?.querySelector("label")?.innerText ||
        field.placeholder ||
        field.name ||
        "Field";

      // Special check for <select> fields with "0" as the default value
      let isInvalid =
        !fieldValue || (field.tagName === "SELECT" && fieldValue === "0");
      // alert(fieldValue);

      if (isInvalid) {
        isValid = false;
        missingFields.push(fieldLabel);
        field.style.border = "2px solid red"; // Highlight input
        let existingError = field.parentNode.querySelector(".error-msg");
        if (existingError) existingError.remove();
      } else {
        field.style.border = ""; // Remove red border if valid
      }
    });

    // Validate language selection (custom dropdown)
    let languageField = document.querySelector(".lan-input");
    if (
      languageField &&
      languageField.innerText.trim().toLowerCase() === "language"
    ) {
      isValid = false;
      missingFields.push("Language");
      languageField.style.border = "2px solid red";

      let existingError = languageField.parentNode.querySelector(".error-msg");
      if (!existingError) {
      }
    } else {
      languageField.style.border = "";
    }


    // Show alert if any field is missing
    if (!isValid) {
      alert(
        "Please fill in the following fields:\n" + missingFields.join("\n")
      );
    } else {
      senddata();
    }
  });
 function senddata() {
   let formData = new FormData();
   
   // Language and Currency
   formData.append("currency", document.querySelector("[id='Currency']").value);

   // Visitors (dynamic)
   let visitors = [];
   document.querySelectorAll(".visitor-section").forEach((visitor, index) => {
        let visitorData = {
          name: visitor.querySelector("[name='Your Name']").value,
          familyName: visitor.querySelector("[name='Family Name']").value,
          visaType: visitor.querySelector("[name='visatype']").value,
          stayFrom: visitor.querySelector("[name='stay_from']").value,
          stayTo: visitor.querySelector("[name='stay_to']").value,
          dobDay: visitor.querySelector("[name='dob_day']").value,
          dobMonth: visitor.querySelector("[name='dob_month']").value,
          dobYear: visitor.querySelector("[name='dob_year']").value,
          gender: visitor.querySelector("[name='Gender']:checked")?.value || "",
          citizenship: visitor.querySelector("[name='Citizenship']").value,
          passportNumber: visitor.querySelector("[name='Passport number']").value,
          validUntilDay: visitor.querySelector("[name='valid_day']").value,
          validUntilMonth: visitor.querySelector("[name='valid_month']").value,
          validUntilYear: visitor.querySelector("[name='valid_year']").value
        };
        visitors.push(visitorData);
      });
      
      formData.append("visitors", JSON.stringify(visitors));
      
      // Cities of stay
      let cities = [];
      document.querySelectorAll("[name='City']").forEach(city => cities.push(city.value));
      formData.append("cities", JSON.stringify(cities));
      
      // Medical insurance checkbox
      formData.append("medicalInsurance", document.querySelector("[name='medical_insurance']").checked ? "Yes" : "No");
      
      // Contact details
      formData.append("email", document.querySelector("[name='Email']").value);
      formData.append("phone", document.querySelector("[name='Phone']").value);
      formData.append("specialInstructions", document.querySelector("[name='Special instructions']").value);
      
      // Send Data to PHP
      
      fetch("process_form.php", {
        method: "POST",
        body: formData
      })
      .then(response => response.text())
      .then(data => {
        alert("Form submitted successfully!");
        console.log(data);
      })
      .catch(error => {
        console.error("Error submitting form:", error);
      });
  }

















  document.addEventListener("DOMContentLoaded", function () {
    calcprice();
});


document.addEventListener("DOMContentLoaded", function () {
  let currencySelect = document.getElementById("currency")
  
  // Remove the flag that locks the value
  delete currencySelect.dataset.set
  
  // Force the default value from the variable
  currencySelect.value = Currency
  
  // Update the nice select display to match
  let niceSelect = currencySelect.nextElementSibling
  if (niceSelect && niceSelect.classList.contains("nice-select")) {
    let currentDisplay = niceSelect.querySelector(".current")
    if (currentDisplay) {
      currentDisplay.textContent = Currency
    }
    let allOptions = niceSelect.querySelectorAll(".option")
    allOptions.forEach(option => {
      if (option.getAttribute("data-value") === Currency) {
        option.classList.add("selected")
      } else {
        option.classList.remove("selected")
      }
    })
  }
  
  calcprice()
})

async function calcprice() {
  let currencySelect = document.getElementById("currency")
  let currentSelectedValue = Currency

  let amountElements = document.querySelectorAll(".totalAmount")
  amountElements.forEach(element => {
    let amount = visitorCount * 11
    element.textContent = "Total Amount: " + amount + " " + currentSelectedValue
  })


  let niceSelect = currencySelect.nextElementSibling
  if (niceSelect) {
    niceSelect.addEventListener("click", async function (event) {
      let selectedOption = event.target.closest(".option")
      if (selectedOption) {
        let selectedCurrency = selectedOption.getAttribute("data-value")
        currencySelect.value = selectedCurrency

        let currentDisplay = niceSelect.querySelector(".current")
        if (currentDisplay) {
          currentDisplay.textContent = selectedCurrency
        }

        let amountElements = document.querySelectorAll(".totalAmount")
        // amountElements.forEach(element => {
        //   let amount = visitorCount * 11
        //   element.textContent = "Total Amount: " + amount + " " + selectedCurrency
        // })


        let allOptions = niceSelect.querySelectorAll(".option")
        allOptions.forEach(option => {
          if (option.getAttribute("data-value") === selectedCurrency) {
            option.classList.add("selected")
          } else {
            option.classList.remove("selected")
          }
        })
      }
    })
  }
}

// async function updatePrice() {
//   let currencySelect = document.getElementById("currency")
//   let selectedCurrency = currencySelect.value
//   let baseAmount = visitorCount * 11
//   let finalAmount = baseAmount
//   alert(selectedCurrency);

//   if (selectedCurrency !== "EUR") {
//     try {
//       let response = await fetch(
//         `https://api.exchangerate.host/latest?base=EUR&symbols=${selectedCurrency}`
//       )
//       let data = await response.json()
//       let rate = data.rates[selectedCurrency]
//       finalAmount = baseAmount * rate
//     } catch (error) {
//       console.error("Error fetching conversion rate", error)
//     }
//   }

//   let amountElements = document.querySelectorAll(".totalAmount")
//   amountElements.forEach(element => {
//     element.textContent =
//       "Total Amount: " + finalAmount.toFixed(2) + " " + selectedCurrency
//   })
// }



