function addPlayer() {
  const playerList = document.getElementById("scaledPlayers");

  const playerName = document.getElementById("addNamePlayerInput");
  const playerPosition = document.getElementById("addPositionPlayerInput");
  const shirtNumber = document.getElementById("addShirtNumberPlayerInput");

  const ul = document.createElement("ul");

  ul.id = shirtNumber.value;

  const li = document.createElement("li");
  li.className = "list-item";
  li.innerText =
    "Nome: " +
    playerName.value +
    "\nPosição: " +
    playerPosition.value +
    "\nNúmero da camisa: " +
    shirtNumber.value;

  const h3 = document.createElement("h3");
  h3.innerText = playerPosition.value;

  playerName.value = "";
  playerPosition.value = "";
  shirtNumber.value = "";

  ul.appendChild(li);
  playerList.append(h3, ul);
}

function removePlayer() {
  const playerList = document.getElementById("scaledPlayers");
  const titles = document.getElementsByTagName("h3");
  const players = document.getElementsByTagName("ul");

  const playerNumber = document.getElementById("removeShirtNumberPlayerInput");

  for (let i = 0; i <= players.length - 1; i++) {
    if (players[i].id == playerNumber.value) {
      playerList.removeChild(players[i]);
      playerList.removeChild(titles[i]);
    }
  }

  playerNumber.value = "";
}
