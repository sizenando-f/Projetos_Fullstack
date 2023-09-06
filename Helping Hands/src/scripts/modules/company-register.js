// ---------------------------------------------------------
// Return before use webpack and reactivate as a comment when coding
import "../../styles/css/style.css";
// ---------------------------------------------------------

import { Company } from "../classes/Company.js";

document
  .getElementById("companyRegisterForm")
  .addEventListener("submit", (ev) => {
    ev.preventDefault();
    const companiesArray = [];
    1;

    let companyName = document.getElementById("companyNameInput").value;
    let companyEmail = document.getElementById("companyEmailInput").value;
    let companyPassword = document.getElementById("companyPasswordInput").value;
    let companyAddress = document.getElementById("companyAddressInput").value;
    let companyCity = document.getElementById("companyCityInput").value;
    let companyState = document.getElementById("companyStateInput").value;
    let companyZip = document.getElementById("companyZipInput").value;
    let companyWebsite = document.getElementById("companyWebsiteInput").value;
    let companyContact = document.getElementById("companyContactInput").value;
    let companyDescription = document.getElementById(
      "companyDescriptionInput"
    ).value;

    const newCompany = new Company(
      companyName,
      companyEmail,
      companyPassword,
      companyAddress,
      companyCity,
      companyState,
      companyZip,
      companyWebsite,
      companyContact,
      companyDescription
    );

    let convertedArray = JSON.parse(localStorage.getItem("companiesArray"));

    companiesArray.push(newCompany);

    if (convertedArray) {
      convertedArray.forEach((element) => {
        companiesArray.push(element);
      });
    }

    // Transform array into string to save in local storage
    let companiesArrayString = JSON.stringify(companiesArray);

    localStorage.removeItem("companiesArray");

    // Saving into local storage
    localStorage.setItem("companiesArray", companiesArrayString);

    alert("Successfully registered!");
    window.location.href = "../../index.html#companies";
  });

const prevBtns = document.querySelectorAll(".prev-btn");
const nextBtns = document.querySelectorAll(".next-btn");
const progress = document.querySelector(".progress");
const formSteps = document.querySelectorAll(".step");

let currentStep = 0;

function updateProgress() {
  const progressPercent = (currentStep / (formSteps.length - 1)) * 100;
  progress.style.width = `${progressPercent}%`;
}

function showStep(step) {
  formSteps[currentStep].classList.remove("active");
  formSteps[step].classList.add("active");
  currentStep = step;

  if (currentStep === formSteps.length - 1) {
    nextBtns.forEach((btn) => btn.setAttribute("disabled", "true"));
  } else {
    nextBtns.forEach((btn) => btn.removeAttribute("disabled"));
  }

  if (currentStep === 0) {
    prevBtns.forEach((btn) => btn.setAttribute("disabled", "true"));
  } else {
    prevBtns.forEach((btn) => btn.removeAttribute("disabled"));
  }

  updateProgress();
}

nextBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    showStep(currentStep + 1);
  })
);

prevBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    showStep(currentStep - 1);
  })
);

showStep(0);
