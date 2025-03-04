
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
    <input type="text" placeholder="Name, middle name">
    
    <label>Family Name</label>
    <input type="text" placeholder="Name, middle name">
   <label>Visa type</label>
    <select id="visa-type${index}">
        <option value="">Select your visa type</option>
        <option value="1">Single-entry tourist visa</option>
        <option value="3">Double-entry tourist visa</option>
        <option value="12">Business visa</option>
    </select>

    <label>Length of your stay</label>
    <div class="stay">
        <label for="from${index}">from</label>

        <input type="date" id="from${index}" class="date-placeholder">
        <label for="to${index}"">to</label>

        <input type="date" id="to${index}" class="date-placeholder">
    </div>

    <label>Date of Birth</label>
    <div class="date">
        <label for="day-birth${index}">Day</label>
        <select id="day-birth${index}"></select>

        <label for="month-birth${index}">Month</label>
        <select id="month-birth${index}"></select>

        <label for="year-birth${index}">Year</label>
        <select id="year-birth${index}"></select>
    </div>
    
    <label>Gender</label>
    <div class="gender">
        <div>
            <input type="radio" name="gender-${index}" value="Male" id="male-${index}">
            <label for="male-${index}"> Male</label>
        </div>
        <div>
            <input type="radio" id="female-${index}" name="gender-${index}" value="Female">
            <label for="female-${index}">Female</label>
        </div>
    </div>
    
    <label>Citizenship</label>
    
        <input type="text" class="count" id="citizenship${index}">

    <label>Passport number</label>
    <input type="text">

    <label>Valid through</label>
    <div class="date">
        <label for="day-valid${index}">Day</label>
        <select id="day-valid${index}"></select>

        <label for="month-valid${index}">Month</label>
        <select id="month-valid${index}"></select>

        <label for="year-valid${index}">Year</label>
        <select id="year-valid${index}"></select>
    </div>
</div>
`;
// $(`citizenship${index}`).countrySelect();
// document.querySelector(`#citizenship${index}`).countrySelect();


  visitorContainer.appendChild(visitorDiv);

  visitorDiv.querySelector(".add-visitor-btn").addEventListener("click", () => addVisitor(index + 1));

  populateDropdown(`day-birth${index}`, 1, 31);
  populateDropdown(`day-valid${index}`, 1, 31);
  populateDropdown(`month-birth${index}`, 1, 12, monthNames);
  populateDropdown(`month-valid${index}`, 1, 12, monthNames);
  populateDropdown(`year-birth${index}`, 1900, new Date().getFullYear());
  populateDropdown(`year-valid${index}`, 1900, new Date().getFullYear());

  let visaTypeSelect = document.getElementById(`visa-type${index}`);
  let fromInput = document.getElementById(`from${index}`);
  let toInput = document.getElementById(`to${index}`);
//   let citizenshipSelect = document.getElementById(`citizenship${index}`);

//   countries.forEach((city) => {
//     let option = document.createElement("option");
//     option.value = city;
//     option.textContent = city;
//     citizenshipSelect.appendChild(option);
//   });

  visaTypeSelect.addEventListener("change", () => updateToDate(visaTypeSelect, fromInput, toInput));
  fromInput.addEventListener("change", () => updateToDate(visaTypeSelect, fromInput, toInput));
}

function populateDropdown(id, start, end, labels = null) {
  let select = document.getElementById(id);
  for (let i = start; i <= end; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = labels ? labels[i - 1] : i;
    select.appendChild(option);
  }
}
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".count").forEach(function (element) {
        // Listen for changes and alert the selected country
        element.addEventListener("change", function () {
            let countryData = window.countrySelect && $(element).countrySelect("getSelectedCountryData");
            if (countryData && countryData.name) {
                alert("Selected Country: " + countryData.name);
            } else {
                alert("No country selected");
            }
        });
    });
});


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

// function addVisitor(index) {
//   if (index > visitorCount) {
//     visitorCount = index;
//   }

//   // Remove previous "Add Visitor" button
//   const prevButton = document.querySelector(".add-visitor-btn");
//   if (prevButton) prevButton.remove();

//   const visitorDiv = document.createElement("div");
//   visitorDiv.className = "visitor-section";
//   visitorDiv.innerHTML = `
// <div class="visitor-header">

//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
// <path d="M18 2H6C4.34 2 3 3.33 3 4.97V15.88C3 17.52 4.34 18.85 6 18.85H6.76C7.56 18.85 8.32 19.16 8.88 19.72L10.59 21.41C11.37 22.18 12.64 22.18 13.42 21.41L15.13 19.72C15.69 19.16 16.46 18.85 17.25 18.85H18C19.66 18.85 21 17.52 21 15.88V4.97C21 3.33 19.66 2 18 2ZM12 5.75C13.29 5.75 14.33 6.79 14.33 8.08C14.33 9.37 13.29 10.41 12 10.41C10.71 10.41 9.67 9.36 9.67 8.08C9.67 6.79 10.71 5.75 12 5.75ZM14.68 15.06H9.32C8.51 15.06 8.04 14.16 8.49 13.49C9.17 12.48 10.49 11.8 12 11.8C13.51 11.8 14.83 12.48 15.51 13.49C15.96 14.16 15.48 15.06 14.68 15.06Z" fill="white"/>
// </svg> Visitor (${index}) details
//     <button class="add-visitor-btn">+ Add a visitor</button>
// </div>
// <div class="visitor-body">
//     <label>Your Name</label>
//     <input type="text" placeholder="Name, middle name">
    
//     <label>Family Name</label>
//     <input type="text" placeholder="Name, middle name">
//    <label>Visa type</label>
//     <select id="visa-type${index}">
//         <option value="">Select your visa type</option>
//         <option value="1">Single-entry tourist visa</option>
//         <option value="3">Double-entry tourist visa</option>
//         <option value="12">Business visa</option>
//     </select>

//     <label>Length of your stay</label>
//     <div class="stay">
//         <input type="date" id="from${index}"  placeholder="form" class="date-placeholder">
//         <input type="date" id="to${index}"  placeholder="to" class="date-placeholder">
//     </div>

//     <label>Date of Birth</label>

// <div class="date">
// <label for="day-birth${index}">Day</label>
// <select id="day-birth${index}"></select>

// <label for="month-birth${index}">Month</label>
// <select id="month-birth${index}"></select>

// <label for="year-birth${index}">Year</label>
// <select id="year-birth${index}"></select>

//      </div>
    
//     <label>Gender</label>
//     <div class="gender">
//     <div>
//     <input type="radio" name="gender-${index}" value="Male" id="male"><label for="male"> Male</label>
//     </div>
//     <div>
//     <input type="radio" id="female" name="gender-${index}" value="Female"><label for="female">Female</label>
//     </div>
//     </div>
    
//       <label>Citizenship</label>
//       <select id="citizenship${index}">>

//       </select>
// <label> Passport number</label>
//     <input type="text" placeholder="">
//      <label>Valid through</label>
//      <div class="date">
// <label for="day-valid${index}">Day</label>
// <select id="day-valid${index}"></select>

// <label for="month-valid${index}">Month</label>
// <select id="month-valid${index}"></select>

// <label for="year-valid${index}">Year</label>
// <select id="year-valid${index}"></select>
//      </div>
// </div>
// `;

//   visitorContainer.appendChild(visitorDiv);

//   // Attach event to the new "Add Visitor" button
//   visitorDiv
//     .querySelector(".add-visitor-btn")
//     .addEventListener("click", () => addVisitor(index + 1));

//   const daySelect = document.getElementById(`day-birth${index}`);
//   const dayvSelect = document.getElementById(`day-valid${index}`);
//   for (let i = 1; i <= 31; i++) {
//     let option1 = document.createElement("option");
//     let option2 = document.createElement("option");

//     option1.value = option2.value = i;
//     option1.textContent = option2.textContent = i;

//     daySelect.appendChild(option1);
//     dayvSelect.appendChild(option2);
//   }
//   // Populate months (January - December)
//   const monthSelect = document.getElementById(`month-birth${index}`);
//   const monthvSelect = document.getElementById(`month-valid${index}`);
// 

//   monthNames.forEach((month, index) => {
//     let option1 = document.createElement("option");
//     let option2 = document.createElement("option");

//     option1.value = option2.value = index + 1;
//     option1.textContent = option2.textContent = month;

//     monthSelect.appendChild(option1);
//     monthvSelect.appendChild(option2);
//   });

//   // Populate years (1900 - Current Year)
//   const yearSelect = document.getElementById(`year-birth${index}`);
//   const yearvSelect = document.getElementById(`year-valid${index}`);
//   const currentYear = new Date().getFullYear();

//   for (let i = currentYear; i >= 1900; i--) {
//     let option1 = document.createElement("option");
//     let option2 = document.createElement("option");

//     option1.value = option2.value = i;
//     option1.textContent = option2.textContent = i;

//     yearSelect.appendChild(option1);
//     yearvSelect.appendChild(option2);
//   }
//   let visaTypeSelect = document.getElementById(`visa-type${index}`);
//   let fromInput = document.getElementById(`from${index}`);
//   let toInput = document.getElementById(`to${index}`);
//   let citizenshipSelect = document.getElementById(`citizenship${index}`);

//   countries.forEach((city) => {
//     let option = document.createElement("option");
//     option.value = city;
//     option.textContent = city;
//     citizenshipSelect.appendChild(option);
//   });
//   updateToDate(visaTypeSelect, fromInput, toInput);
// }

// for (let index = 1; index <= visitorCount; index++) {
//   addVisitor(index);
//   // alert(visitorCount);
// }

// function updateToDate(v, f, toInput) {
//   alert("d");
//   let visaType = v.value;
//   let fromDateValue = f.value;

//   if (!visaType || !fromDateValue) {
//     toInput.value = "";
//     toInput.removeAttribute("max");
//     return;
//   }

//   let fromDate = new Date(fromDateValue);
//   let toDate = new Date(fromDate);

//   toDate.setMonth(toDate.getMonth() + parseInt(visaType)); // Add months based on visa type

//   let maxDate = toDate.toISOString().split("T")[0]; // Convert to YYYY-MM-DD format
//   toInput.value = maxDate;
//   toInput.setAttribute("max", maxDate);

//   // Attach event listeners
//   visaTypeSelect.addEventListener("change", updateToDate);
//   fromInput.addEventListener("change", updateToDate);
// }

//   document.addEventListener("DOMContentLoaded", function () {
//     const dateInput = document.getElementById("dateInput");

//     dateInput.addEventListener("input", function () {
//         if (dateInput.value) {
//             dateInput.classList.remove("empty");
//         } else {
//             dateInput.classList.add("empty");
//         }
//     });

//     if (!dateInput.value) {
//         dateInput.classList.add("empty");
//     }
// });

// Start with one visitor

const cityContainer = document.getElementById("city-container");
const cityContainerbtn = document.getElementById("city-containerbtn");

function addcity(index) {
  cityContainerbtn.onclick = () => {
    cityCount += 1;
    addcity(cityCount);
  };
  console.log(cityCount);
  const citydiv = document.createElement("div");
  citydiv.className = "city-section";
  citydiv.innerHTML = `
<div class="city-header">
<div class="city-body">
    <label>City</label>
      <select id="city${index}">
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

window.addEventListener("scroll", checkVisibility);
window.addEventListener("resize", checkVisibility);
document.addEventListener("DOMContentLoaded", checkVisibility);
