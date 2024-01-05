function renderTransation(transationData) {
  const transationItem = document.createElement("div");
  transationItem.className = "transation-item";
  transationItem.id = transationData.id;

  const items = document.createElement("div");
  items.className = "items";

  const transationName = document.createElement("input");
  transationName.id = `transation-name-${transationData.id}`;
  transationName.type = "text";
  transationName.value = transationData.name;
  transationName.disabled = true;

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

  editButton.addEventListener("click", (ev) => {
    const buttonsDiv = ev.currentTarget.parentNode;

    if (buttonsDiv.childNodes.length === 2) {
      let id = ev.currentTarget.parentNode.parentNode.id;
      const itemsDiv = ev.currentTarget.parentNode.parentNode.childNodes[0];

      itemsDiv.childNodes.forEach((input) => {
        input.disabled = false;
      });

      const saveButton = document.createElement("button");
      saveButton.textContent = "Save";
      saveButton.className = "save-button";

      saveButton.addEventListener("click", async (ev2) => {
        ev2.currentTarget.remove();

        const updateTransation = {
          name: itemsDiv.childNodes[0].value,
          value: parseFloat(itemsDiv.childNodes[1].value),
        };

        const response = await fetch(`http://localhost:3000/transation/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateTransation),
        }).then((res) => res.json());
        itemsDiv.childNodes[0].disabled = true;
        itemsDiv.childNodes[0].value = response.name;
        itemsDiv.childNodes[1].disabled = true;
        itemsDiv.childNodes[1].value = response.value.toFixed(2);

        if (response.value < 0) itemsDiv.childNodes[1].className = "negative";
        else itemsDiv.childNodes[1].className = "positive";
      });

      buttonsDiv.appendChild(saveButton);
    }
  });

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", async (ev) => {
    ev.currentTarget.parentNode.parentNode.remove();
    let id = ev.currentTarget.parentNode.parentNode.id;
    await fetch(`http://localhost:3000/transation/${id}`, {
      method: "DELETE",
    });
  });

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

  const savedTransation = await resolve.json();
  renderTransation(savedTransation);
  form.reset();
});
