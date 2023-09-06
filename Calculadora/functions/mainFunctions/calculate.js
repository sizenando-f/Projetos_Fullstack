const input = document.getElementById("enter-input");
const resultInput = document.getElementById("out-input");

function calculate() {
  resultInput.value = "ERROR";
  const result = eval(input.value);
  resultInput.value = result;
}

export { calculate };
