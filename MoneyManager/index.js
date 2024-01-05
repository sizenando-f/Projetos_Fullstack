function renderTransation(transationData) {
  const transationItem = document.createElement("div");
  transationItem.className = "transation-item";

  const items = document.createElement("div");
  items.className = "items";

  const transationName = document.createElement("input");
  transationName.id = `transation-name-${transationData.id}`;
  transationName.type = "text";
  transationName.value = transationData.name;
  transationName.disabled = "true";

  const transationValue = document.createElement("input");
  transationValue.id = `transation-value-${transationData.id}`;
  transationValue.type = "text";
  transationValue.value = transationData.value.toFixed(2);
  transationValue.disabled = "true";
  if (transationData.value < 0) transationValue.className = "negative";
  else transationValue.className = "positive";

  items.append(transationName, transationValue);

  const buttons = document.createElement("div");
  buttons.className = "buttons";

  const editButton = document.createElement("button");
  editButton.className = "edit-button";
  editButton.textContent = "Edit";

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  deleteButton.textContent = "Delete";

  buttons.append(editButton, deleteButton);

  transationItem.append(items, buttons);

  const section = document.getElementById("transation-section");
  section.appendChild(transationItem);
}

document.addEventListener("DOMContentLoaded", async () => {
  const transations = await fetch("http://localhost:3000/transation").then(
    (res) => res.json()
  );

  transations.forEach(renderTransation);
});

const form = document.querySelector("form");

form.addEventListener("submit", async (ev) => {
  ev.preventDefault();

  const newTransation = {
    name: document.getElementById("name").value,
    value: parseFloat(document.getElementById("value").value),
  };

  const resolve = await fetch("http://localhost:3000/transation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTransation),
  });

  form.reset();
});
