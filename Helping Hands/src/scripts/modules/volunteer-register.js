// ---------------------------------------------------------
// Return before use webpack and reactivate as a comment when coding
import "../../styles/css/style.css";
// ---------------------------------------------------------

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
