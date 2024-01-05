const form = document.querySelector("form");

form.addEventListener("submit", async (ev) => {
  ev.preventDefault();

  const newTransation = {
    name: document.getElementById("name").value,
    value: document.getElementById("value").value,
  };

  const resolve = await fetch("http://localhost:3000/history", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTransation),
  });

  form.reset();
});
