const resultInput = document.getElementById("out-input");

const copyButtonBtn = document
  .getElementById("copy-result")
  .addEventListener("click", function (ev) {
    const button = ev.currentTarget;
    if (button.innerText === "COPIAR RESULTADO") {
      button.innerText = "COPIADO!";
      navigator.clipboard.writeText(resultInput.value);
    } else {
      button.innerText = "COPIAR RESULTADO";
    }
  });

export { copyButtonBtn };
