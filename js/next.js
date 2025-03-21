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
var cityCount = 1;
// document.getElementById("nextStsepBtn").addEventListener("click", function () {
// let visitorCount = document.getElementById("numOfVisitors").value;


//   document.getElementById("content").innerHTML = `
// <div class="container">
// <h1>Get Invitation to Russia</h1>

// <p>First choose the language and currency you want to deal with</p>
// <div class="section">
// <div class="section-header">
//     <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//   <path d="M12 22C10.6333 22 9.34167 21.7373 8.125 21.212C6.90833 20.6867 5.846 19.97 4.938 19.062C4.03 18.154 3.31333 17.0917 2.788 15.875C2.26267 14.6583 2 13.3667 2 12C2 10.6167 2.26267 9.321 2.788 8.113C3.31333 6.905 4.03 5.84667 4.938 4.938C5.846 4.02933 6.90833 3.31267 8.125 2.788C9.34167 2.26333 10.6333 2.00067 12 2C13.3833 2 14.6793 2.26267 15.888 2.788C17.0967 3.31333 18.1547 4.03 19.062 4.938C19.9693 5.846 20.686 6.90433 21.212 8.113C21.738 9.32167 22.0007 10.6173 22 12C22 13.3667 21.7373 14.6583 21.212 15.875C20.6867 17.0917 19.97 18.1543 19.062 19.063C18.154 19.9717 17.0957 20.6883 15.887 21.213C14.6783 21.7377 13.3827 22 12 22ZM12 19.95C12.4333 19.35 12.8083 18.725 13.125 18.075C13.4417 17.425 13.7 16.7333 13.9 16H10.1C10.3 16.7333 10.5583 17.425 10.875 18.075C11.1917 18.725 11.5667 19.35 12 19.95ZM9.4 19.55C9.1 19 8.83767 18.429 8.613 17.837C8.38833 17.245 8.20067 16.6327 8.05 16H5.1C5.58333 16.8333 6.18767 17.5583 6.913 18.175C7.63833 18.7917 8.46733 19.25 9.4 19.55ZM14.6 19.55C15.5333 19.25 16.3627 18.7917 17.088 18.175C17.8133 17.5583 18.4173 16.8333 18.9 16H15.95C15.8 16.6333 15.6127 17.246 15.388 17.838C15.1633 18.43 14.9007 19.0007 14.6 19.55ZM4.25 14H7.65C7.6 13.6667 7.56267 13.3377 7.538 13.013C7.51333 12.6883 7.50067 12.3507 7.5 12C7.49933 11.6493 7.512 11.312 7.538 10.988C7.564 10.664 7.60133 10.3347 7.65 10H4.25C4.16667 10.3333 4.10433 10.6627 4.063 10.988C4.02167 11.3133 4.00067 11.6507 4 12C3.99933 12.3493 4.02033 12.687 4.063 13.013C4.10567 13.339 4.168 13.668 4.25 14ZM9.65 14H14.35C14.4 13.6667 14.4377 13.3377 14.463 13.013C14.4883 12.6883 14.5007 12.3507 14.5 12C14.4993 11.6493 14.4867 11.312 14.462 10.988C14.4373 10.664 14.4 10.3347 14.35 10H9.65C9.6 10.3333 9.56267 10.6627 9.538 10.988C9.51333 11.3133 9.50067 11.6507 9.5 12C9.49933 12.3493 9.512 12.687 9.538 13.013C9.564 13.339 9.60133 13.668 9.65 14ZM16.35 14H19.75C19.8333 13.6667 19.896 13.3377 19.938 13.013C19.98 12.6883 20.0007 12.3507 20 12C19.9993 11.6493 19.9787 11.312 19.938 10.988C19.8973 10.664 19.8347 10.3347 19.75 10H16.35C16.4 10.3333 16.4377 10.6627 16.463 10.988C16.4883 11.3133 16.5007 11.6507 16.5 12C16.4993 12.3493 16.4867 12.687 16.462 13.013C16.4373 13.339 16.4 13.668 16.35 14ZM15.95 8H18.9C18.4167 7.16667 17.8127 6.44167 17.088 5.825C16.3633 5.20833 15.534 4.75 14.6 4.45C14.9 5 15.1627 5.571 15.388 6.163C15.6133 6.755 15.8007 7.36733 15.95 8ZM10.1 8H13.9C13.7 7.26667 13.4417 6.575 13.125 5.925C12.8083 5.275 12.4333 4.65 12 4.05C11.5667 4.65 11.1917 5.275 10.875 5.925C10.5583 6.575 10.3 7.26667 10.1 8ZM5.1 8H8.05C8.2 7.36667 8.38767 6.754 8.613 6.162C8.83833 5.57 9.10067 4.99933 9.4 4.45C8.46667 4.75 7.63733 5.20833 6.912 5.825C6.18667 6.44167 5.58267 7.16667 5.1 8Z" fill="white"/>
// </svg> Language and Currency</span>
// </div>
// <div class="section-body hs">
// <div class="hs-1">
// <label>Language</label>
//  <div class="dropdown">
//                                     <button class="btn drop-btn dropdown-toggle lan-input   " type="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                         language
//                                     </button>
//                                     <ul class="dropdown-menu">
//                                       <li ><a class="dropdown-item" data-img="../img/flag.jpg" ><p><img src="../img/flag.jpg" alt=""> English</p></a></li>
//                                       <li><a class="dropdown-item">Another action</a></li>
//                                       <li><a class="dropdown-item">Something else here</a></li>
//                                     </ul>
//                                   </div>
// </div>
// <div class="hs-1">
//     <label>  Currency</label>
//     <select>
//         <option>USD</option>
//     </select>
//     </div>
// </div>
// </div>

// <p>Next complete the form</p>
// <div class="section">
// <div class="section-header">
//     <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//   <path d="M16.7502 3.56V2C16.7502 1.59 16.4102 1.25 16.0002 1.25C15.5902 1.25 15.2502 1.59 15.2502 2V3.5H8.75023V2C8.75023 1.59 8.41023 1.25 8.00023 1.25C7.59023 1.25 7.25023 1.59 7.25023 2V3.56C4.55023 3.81 3.24023 5.42 3.04023 7.81C3.02023 8.1 3.26023 8.34 3.54023 8.34H20.4602C20.7502 8.34 20.9902 8.09 20.9602 7.81C20.7602 5.42 19.4502 3.81 16.7502 3.56Z" fill="white"/>
//   <path d="M20 9.84003H4C3.45 9.84003 3 10.29 3 10.84V17C3 20 4.5 22 8 22H16C19.5 22 21 20 21 17V10.84C21 10.29 20.55 9.84003 20 9.84003ZM9.21 18.21C9.11 18.3 9 18.37 8.88 18.42C8.76 18.47 8.63 18.5 8.5 18.5C8.37 18.5 8.24 18.47 8.12 18.42C8 18.37 7.89 18.3 7.79 18.21C7.61 18.02 7.5 17.76 7.5 17.5C7.5 17.24 7.61 16.98 7.79 16.79C7.89 16.7 8 16.63 8.12 16.58C8.36 16.48 8.64 16.48 8.88 16.58C9 16.63 9.11 16.7 9.21 16.79C9.39 16.98 9.5 17.24 9.5 17.5C9.5 17.76 9.39 18.02 9.21 18.21ZM9.42 14.38C9.37 14.5 9.3 14.61 9.21 14.71C9.11 14.8 9 14.87 8.88 14.92C8.76 14.97 8.63 15 8.5 15C8.37 15 8.24 14.97 8.12 14.92C8 14.87 7.89 14.8 7.79 14.71C7.7 14.61 7.63 14.5 7.58 14.38C7.53 14.26 7.5 14.13 7.5 14C7.5 13.87 7.53 13.74 7.58 13.62C7.63 13.5 7.7 13.39 7.79 13.29C7.89 13.2 8 13.13 8.12 13.08C8.36 12.98 8.64 12.98 8.88 13.08C9 13.13 9.11 13.2 9.21 13.29C9.3 13.39 9.37 13.5 9.42 13.62C9.47 13.74 9.5 13.87 9.5 14C9.5 14.13 9.47 14.26 9.42 14.38ZM12.71 14.71C12.61 14.8 12.5 14.87 12.38 14.92C12.26 14.97 12.13 15 12 15C11.87 15 11.74 14.97 11.62 14.92C11.5 14.87 11.39 14.8 11.29 14.71C11.11 14.52 11 14.26 11 14C11 13.74 11.11 13.48 11.29 13.29C11.39 13.2 11.5 13.13 11.62 13.08C11.86 12.97 12.14 12.97 12.38 13.08C12.5 13.13 12.61 13.2 12.71 13.29C12.89 13.48 13 13.74 13 14C13 14.26 12.89 14.52 12.71 14.71Z" fill="white"/>
// </svg>    Length of stay and type of visa</span>
// </div>
// <div class="section-body">
//     <label>Visa type</label>
//     <select>
//         <option>Select your visa type</option>
//     </select>
//     <label>Length of your stay</label>
//       <div class="stay">
//          <input type="date" id="from" class="date-placeholder" placeholder="form">
//          <input type="date" id="to" class="date-placeholder" placeholder="to">
 
//         </div>
// </div>
// </div>

// <div id="visitor-container"></div>
// <div class="section">
// <div class="section-header head">
// <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
//   <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
// </svg>  Cities of stay</span>
// <button class="add-btn" id="city-containerbtn" onclick="addcity()">+ Add City</button>
    

// </div>
// <div class="section-body">
// <div id="city-container"></div>
// </div>

// </div>
// <div class="section">
// <div class="section-header">
//     <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
//   <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
// </svg>How to contact you</span>
// </div>
// <div class="section-body">
// <div class="row">
//     <div class="col-lg-6">
//     <label>Email</label>
//     <input type="text">
    
//     </div>
    
//     <div class="col-lg-6">
//     <label>Phone</label>
//     <input type="Phone">
//     </div>
    
//     <div class="col-lg-12">
//     <label>Special instructions</label>
//     <textarea name=""  cols="60" rows="6" id=""></textarea>

    
//     </div>

//     </div>

// </div>


// </div>
// <div class="payment-section">
//     <label class="terms">
//         <input type="checkbox" id="agreeTerms">
//         I agree with the <a href="#">Terms of service</a> and <a href="#">Privacy Policy</a>
//     </label>

//     <hr class="divider">

//     <div class="total-amount">
//     <div class="t-fee">
//     <span>Total Amount</span>
//     <div class="amount-box">
//         <span id="totalAmount">150 USD</span>
//     </div>
//     </div>
//         <button class="payment-btn" id="completePayment">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//   <path d="M22 7.5499C22 8.2099 21.46 8.7499 20.8 8.7499H3.2C2.54 8.7499 2 8.2099 2 7.5499V7.5399C2 5.2499 3.85 3.3999 6.14 3.3999H17.85C20.14 3.3999 22 5.2599 22 7.5499Z" fill="white"/>
//   <path d="M2 11.45V16.46C2 18.75 3.85 20.6 6.14 20.6H17.85C20.14 20.6 22 18.74 22 16.45V11.45C22 10.79 21.46 10.25 20.8 10.25H3.2C2.54 10.25 2 10.79 2 11.45ZM8 17.25H6C5.59 17.25 5.25 16.91 5.25 16.5C5.25 16.09 5.59 15.75 6 15.75H8C8.41 15.75 8.75 16.09 8.75 16.5C8.75 16.91 8.41 17.25 8 17.25ZM14.5 17.25H10.5C10.09 17.25 9.75 16.91 9.75 16.5C9.75 16.09 10.09 15.75 10.5 15.75H14.5C14.91 15.75 15.25 16.09 15.25 16.5C15.25 16.91 14.91 17.25 14.5 17.25Z" fill="white"/>
// </svg> Go To Complete Payment
//         </button>
//     </div>
// </div>
// </div>


// `;
//   let visitorContainer = document.getElementById("visitor-container");

//   function addVisitor(index) {
//     if (index > visitorCount) {
//         visitorCount=index;
//     }

//     // Remove previous "Add Visitor" button
//     const prevButton = document.querySelector(".add-visitor-btn");
//     if (prevButton) prevButton.remove();

//     const visitorDiv = document.createElement("div");
//     visitorDiv.className = "visitor-section";
//     visitorDiv.innerHTML = `
//         <div class="visitor-header">
      
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//   <path d="M18 2H6C4.34 2 3 3.33 3 4.97V15.88C3 17.52 4.34 18.85 6 18.85H6.76C7.56 18.85 8.32 19.16 8.88 19.72L10.59 21.41C11.37 22.18 12.64 22.18 13.42 21.41L15.13 19.72C15.69 19.16 16.46 18.85 17.25 18.85H18C19.66 18.85 21 17.52 21 15.88V4.97C21 3.33 19.66 2 18 2ZM12 5.75C13.29 5.75 14.33 6.79 14.33 8.08C14.33 9.37 13.29 10.41 12 10.41C10.71 10.41 9.67 9.36 9.67 8.08C9.67 6.79 10.71 5.75 12 5.75ZM14.68 15.06H9.32C8.51 15.06 8.04 14.16 8.49 13.49C9.17 12.48 10.49 11.8 12 11.8C13.51 11.8 14.83 12.48 15.51 13.49C15.96 14.16 15.48 15.06 14.68 15.06Z" fill="white"/>
// </svg> Visitor (${index}) details
//             <button class="add-visitor-btn">+ Add a visitor</button>
//         </div>
//         <div class="visitor-body">
//             <label>Your Name</label>
//             <input type="text" placeholder="Name, middle name">
            
//             <label>Family Name</label>
//             <input type="text" placeholder="Name, middle name">

//             <label>Date of Birth</label>

//     <div class="date">

//              <input type="date-day" placeholder="Day"class="date-placeholder"> 
//              <input type="date" placeholder="Month"class="date-placeholder">
//              <input type="date" placeholder="Year"class="date-placeholder">
//              </div>
            
//             <label>Gender</label>
//             <div class="gender">
//             <div>
//             <input type="radio" name="gender-${index}" value="Male" id="male"><label for="male"> Male</label>
//             </div>
//             <div>
//             <input type="radio" id="female" name="gender-${index}" value="Female"><label for="female">Female</label>
//             </div>
//             </div>
            
//             <label>Citizenship</label>
//             <select>
//                 <option>Scsc</option>
//                 <option>Sss</option>
//                 <option>aca</option>
//                 <option>Scsp</option>
//             </select>
//        <label> Passport number</label>
//             <input type="text" placeholder="">
//              <label>Valid through</label>
//              <div class="date">
//              <input type="date" placeholder="Day"class="date-placeholder"> 
//              <input type="date" placeholder="Month"class="date-placeholder">
//              <input type="date" placeholder="Year"class="date-placeholder">
//              </div>
//         </div>
//     `;

//     visitorContainer.appendChild(visitorDiv);

//     // Attach event to the new "Add Visitor" button
//     visitorDiv
//     .querySelector(".add-visitor-btn")
//     .addEventListener("click", () => addVisitor(index+1));
  
//   }
//   for (let index = 1; index <= visitorCount; index++) {
//     addVisitor(index);
//     // alert(visitorCount);
//   }
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

//   // Start with one visitor

//   const cityContainer = document.getElementById("city-container");
//   const cityContainerbtn = document.getElementById("city-containerbtn");

//   function addcity(index) {
//     cityContainerbtn.onclick = ()=>{
//         cityCount+=1;
//         addcity(cityCount);
        
//     };
//     console.log(cityCount);
//     const citydiv = document.createElement("div");
//     citydiv.className = "city-section";
//     citydiv.innerHTML = `
//         <div class="city-header">
//         <div class="city-body">
//             <label>City</label>
//               <div class="dropdown">
//                                     <button class="btn drop-btn dropdown-toggle" id="numberofVisitors" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                         Sellect your Citizenship
//                                     </button>
//                                     <ul class="dropdown-menu">
//                                       <li><a class="dropdown-item">sdsd</a></li>
//                                       <li><a class="dropdown-item">sjdghajkdg</a></li>
//                                     </ul>
//                                   </div>
            
//             </div>
//             <h1>City Num (${index}) <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
//   <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
// </svg></h1>

//         </div>
//     `;

//     cityContainer.appendChild(citydiv);

// }

//   for (let index = 0; index < cityCount; index++) {
//     addcity(index);
//   }
// });
