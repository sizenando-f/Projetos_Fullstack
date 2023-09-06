const root = document.querySelector(":root");
const body = document.querySelector("body");
document.getElementById("change-theme").addEventListener("click", function () {
  if (body.dataset.theme === "light") {
    root.style.setProperty("--bg-color", "rgb(35, 35, 35)");
    root.style.setProperty("--font-color", "#fff");
    root.style.setProperty("--clear-btn", "#Ff6565");
    root.style.setProperty("--equal-btn", "#74ff69");
    body.dataset.theme = "dark";
  } else {
    root.style.setProperty("--bg-color", "#fff");
    root.style.setProperty("--font-color", "rgb(35, 35, 35)");
    root.style.setProperty("--clear-btn", "#e74c3c");
    root.style.setProperty("--equal-btn", "rgb(0, 154, 54)");
    body.dataset.theme = "light";
  }
});

export { body };
