const options = document.querySelectorAll(".option-block");
const playerArea = document.querySelector(".name-part");
const playerNameLabel = document.querySelectorAll(".playerNameLabel");
const playerNameInput = document.querySelectorAll(".playerNameInput");
const buttonStart = document.getElementById("start-button");
const playAgainDiv = document.querySelector(".play-again");

const playAgainButton = document.createElement("button");
playAgainButton.type = "button";
playAgainButton.innerText = "Jogar novamente";
playAgainButton.id = "play-again-button";

let playerTime = "player1";
let option = "X";
let player1 = "";
let player2 = "";

let pTime = document.createElement("p");
pTime.id = "TimeOf";

let gamePermission = false;
let count = 0;
let gameEnd = false;

// Botão que reinicializa o jogo
playAgainButton.addEventListener("click", function (ev) {
  options.forEach(function (op, i) {
    op.style.setProperty("background-color", "white");
    op.innerText = "";
    op.dataset.checked = "false";
    op.dataset.player = i;
  });
  playerTime = "player1";
  gamePermission = true;
  gameEnd = false;
  count = 0;
  option = "X";
  ev.currentTarget.remove();
  pTime.innerText = "Vez de " + player1;
});

// Coloca um evento de click em cada campo
options.forEach(function (block) {
  block.addEventListener("click", function (ev) {
    // Se o campo não tiver sido marcado continua e altera de X para O e vice-versa
    if (gamePermission) {
      if (ev.currentTarget.dataset.checked === "false") {
        if (option === "X") {
          ev.currentTarget.innerText = option;
          option = "O";
        } else {
          ev.currentTarget.innerText = option;
          option = "X";
        }
        // Coloca identificador no campo de qual jogador marcou
        ev.currentTarget.dataset.player = playerTime;
        // Checa o jogo para ver o resultado
        checkGame();
        count++;
      }
      // Muda a vez do jogador
      switchPlayers(ev.currentTarget);
      ev.currentTarget.dataset.checked = "true";

      // Caso o jogo acabe, aparece o botão de reiniciar
      if (gameEnd === true || count === 9) {
        playAgainDiv.appendChild(playAgainButton);
      }
    }
    // Se for falso, quer dizer que o jogo acabou, mostrando o resultado
    if (!gamePermission) {
      pTime.innerText = "O ganhador foi " + checkGame();
    }
    // Se o jogo não acabou e todas casas foram marcadas então teve um empate
    if (count === 9 && gameEnd === false) {
      pTime.innerText = "Empate";
    }
  });
});

// Função que troca de jogador atual
function switchPlayers(block) {
  if (block.dataset.checked === "true") {
  } else {
    if (playerTime === "player1") {
      playerTime = "player2";
      pTime.innerText = "Vez de " + player2;
    } else {
      playerTime = "player1";
      pTime.innerText = "Vez de " + player1;
    }
  }
}

// Função que checa cada combinação de vitória
function checkGame() {
  const um = document.getElementById("1");
  const dois = document.getElementById("2");
  const tres = document.getElementById("3");
  const quatro = document.getElementById("4");
  const cinco = document.getElementById("5");
  const seis = document.getElementById("6");
  const sete = document.getElementById("7");
  const oito = document.getElementById("8");
  const nove = document.getElementById("9");

  // Cada if vai retornar o nome do player vitorioso
  // Linha 1
  if (
    um.dataset.player === dois.dataset.player &&
    dois.dataset.player === tres.dataset.player
  ) {
    um.style.setProperty("background-color", "red");
    dois.style.setProperty("background-color", "red");
    tres.style.setProperty("background-color", "red");
    gamePermission = false;
    gameEnd = true;
    if ("player1" === um.dataset.player) {
      return player1;
    } else {
      return player2;
    }
  } else if (
    // Linha 2
    quatro.dataset.player === cinco.dataset.player &&
    cinco.dataset.player === seis.dataset.player
  ) {
    quatro.style.setProperty("background-color", "red");
    cinco.style.setProperty("background-color", "red");
    seis.style.setProperty("background-color", "red");
    gamePermission = false;
    gameEnd = true;
    if ("player1" === quatro.dataset.player) {
      return player1;
    } else {
      return player2;
    }
  } else if (
    // Linha 3
    sete.dataset.player === oito.dataset.player &&
    oito.dataset.player === nove.dataset.player
  ) {
    sete.style.setProperty("background-color", "red");
    oito.style.setProperty("background-color", "red");
    nove.style.setProperty("background-color", "red");
    gamePermission = false;
    gameEnd = true;
    if ("player1" === sete.dataset.player) {
      return player1;
    } else {
      return player2;
    }
  } else if (
    // Coluna 1
    um.dataset.player === quatro.dataset.player &&
    quatro.dataset.player === sete.dataset.player
  ) {
    um.style.setProperty("background-color", "red");
    quatro.style.setProperty("background-color", "red");
    sete.style.setProperty("background-color", "red");
    gamePermission = false;
    gameEnd = true;
    if ("player1" === um.dataset.player) {
      return player1;
    } else {
      return player2;
    }
  } else if (
    // Coluna 2
    dois.dataset.player === cinco.dataset.player &&
    cinco.dataset.player === oito.dataset.player
  ) {
    dois.style.setProperty("background-color", "red");
    cinco.style.setProperty("background-color", "red");
    oito.style.setProperty("background-color", "red");
    gamePermission = false;
    gameEnd = true;
    if ("player1" === dois.dataset.player) {
      return player1;
    } else {
      return player2;
    }
  } else if (
    // Coluna 3
    tres.dataset.player === seis.dataset.player &&
    seis.dataset.player === nove.dataset.player
  ) {
    tres.style.setProperty("background-color", "red");
    seis.style.setProperty("background-color", "red");
    nove.style.setProperty("background-color", "red");
    gamePermission = false;
    gameEnd = true;
    if ("player1" === tres.dataset.player) {
      return player1;
    } else {
      return player2;
    }
  } else if (
    // Diagonal 1
    um.dataset.player === cinco.dataset.player &&
    cinco.dataset.player === nove.dataset.player
  ) {
    um.style.setProperty("background-color", "red");
    cinco.style.setProperty("background-color", "red");
    nove.style.setProperty("background-color", "red");
    gamePermission = false;
    gameEnd = true;
    if ("player1" === um.dataset.player) {
      return player1;
    } else {
      return player2;
    }
  } else if (
    // Diagonal 2
    tres.dataset.player === cinco.dataset.player &&
    cinco.dataset.player === sete.dataset.player
  ) {
    tres.style.setProperty("background-color", "red");
    cinco.style.setProperty("background-color", "red");
    sete.style.setProperty("background-color", "red");
    gamePermission = false;
    gameEnd = true;
    if ("player1" === tres.dataset.player) {
      return player1;
    } else {
      return player2;
    }
  }
}

// Botão de começar o jogo, enquanto não for clicado, o jogo não é interativo
buttonStart.addEventListener("click", function (ev) {
  if (playerNameInput[0].value === "" || playerNameInput[1].value === "") {
    return;
  }
  gamePermission = true;
  player1 = playerNameInput[0].value;
  player2 = playerNameInput[1].value;

  playerNameInput.forEach(function (element) {
    element.remove();
  });
  playerNameLabel.forEach(function (element) {
    element.remove();
  });
  ev.currentTarget.remove();

  const p = document.createElement("p");
  p.innerText = player1 + " VS " + player2;
  pTime.innerText = "Vez de " + player1;
  playerArea.append(p, pTime);
});
