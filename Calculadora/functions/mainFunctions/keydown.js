import { calculate } from "./calculate.js";

const resultInput = document.getElementById("out-input");
const input = document.getElementById("enter-input");
const allowedKeys = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "*",
  "+",
  "-",
  "%",
  "/",
  "(",
  ")",
  ".",
  " ",
];

document.querySelectorAll(".calcBtn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const value = btn.dataset.value;
    input.value += value;
  });
});

input.addEventListener("keydown", function (ev) {
  ev.preventDefault();
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key;
    return;
  }
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }
  if (ev.key === "Enter") {
    calculate();
  }
});

document.getElementById("equal").addEventListener("click", calculate);

document.getElementById("clear").addEventListener("click", function () {
  input.value = "";
  resultInput.value = "";
  input.focus();
});

export { input };
