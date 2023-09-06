// Criando a lista de palavras
const wordTranscription =
  "macaco orangotango gazela papagaio ostra cadeira mesa elefante guardanapo cofre pelicano golfinho geladeira placa refrigerante salgado bombom tesoura computador teclado microfone carro volante roda porta combustivel gasolina vidro janela telhado martelo foice espada katana helicoptero abelha ferro esmeralda diamante picareta arvore barco pirata navio vela vaca boi piolho olho estatua guerreiro manicomio hospicio tela aranha ferrari porsche olho nariz cabelo hipopotamo madeira perereca genio fogao freezer blindado fuzil municao granada fumaca molotov moto motocicleta motoneta deus celestial touro foguete espaco sapato tenis volei basquete futebol rugbi";
const wordsList = [
  "maca",
  "vela",
  "cobra",
  "radio",
  "martelo",
  "laranja",
  "bola",
  "cafe",
  "abacaxi",
  "lapis",
  "carro",
  "gato",
  "musica",
  "praia",
  "computador",
  "livro",
  "futebol",
  "cinema",
  "aviao",
  "casa",
  "crianca",
  "elefante",
  "sorvete",
  "arvore",
  "relogio",
  "piano",
  "guitarra",
  "faca",
  "espelho",
  "cadeira",
  "janela",
  "porta",
  "piscina",
  "sol",
  "lua",
  "estrela",
  "dinheiro",
  "telefone",
  "microfone",
  "lampada",
  "copo",
  "chave",
  "coelho",
  "escada",
  "sapato",
  "pao",
  "banana",
  "chocolate",
  "geladeira",
  "papel",
  "ceu",
  "terra",
  "mar",
  "montanha",
  "rio",
  "cachorro",
  "passaro",
  "cidade",
  "bonito",
  "peixe",
  "violao",
  "tambor",
  "quadro",
  "bicicleta",
  "lousa",
  "carne",
  "arroz",
  "feijao",
  "farinha",
  "azeite",
  "salsicha",
  "azeitona",
  "vinho",
  "cerveja",
  "uva",
  "morango",
  "melancia",
  "limao",
  "abacate",
  "tomate",
  "tigre",
  "camelo",
  "hipopotamo",
  "girafa",
  "leao",
  "macaco",
  "zebra",
  "panda",
  "elefante",
  "rinoceronte",
  "pato",
  "ganso",
  "peru",
  "galinha",
  "galo",
  "cavalo",
  "burro",
  "ovelha",
  "cabra",
  "vaca",
  "rato",
  "coelho",
  "guaxinim",
  "esquilo",
  "furao",
  "hamsters",
  "cachorro-quente",
  "lasanha",
  "espaguete",
  "pizza",
  "hamburguer",
  "sushi",
  "padaria",
  "restaurante",
  "bar",
  "hotel",
  "resort",
  "cinema",
  "museu",
  "teatro",
  "biblioteca",
  "parque",
  "piscina",
  "ginásio",
  "academia",
  "clube",
  "praia",
  "montanha",
  "deserto",
  "floresta",
  "caverna",
  "ilha",
  "oceano",
  "rio",
  "lago",
  "cachoeira",
  "geleira",
  "vulcão",
  "campo",
  "cidade",
  "fazenda",
  "mercado",
  "loja",
  "shopping",
];

// Escolhendo palavra aleatória
const wordChosed =
  wordsList[Math.round(Math.random() * (wordsList.length - 0) + 0)];

let wordArray = [];
let choosenLetter = "";
let finalResult = "";
let score = 6;
let imageCount = 5;
let p = document.getElementById("word-game");
const worldLength = wordChosed.length;
const input = document.getElementById("word-guesser");
const image = document.getElementById("hangman-image");
const replayGameDiv = document.getElementById("replay-game-area");
const tryAreaDiv = document.getElementById("try-area");
const letter = document.createElement("p");
const resultArea = document.getElementById("result-area");

// Criando array com as letras permitidas
const allowedLetterString =
  "a b c d e f g j h i j k l m n o p q r s t u v w x y z";
const allowedLetterArray = allowedLetterString.split(" ");

// Inicializa o array contendo as letras da palavra
for (let i = 0; i < worldLength; i++) {
  wordArray.push(" _ ");
}

// Inicializa a palavra na página
for (let i = 0; i < worldLength; i++) {
  finalResult += wordArray[i];
  p.innerText = finalResult;
}

// Função que limita apenas uma letra no input e chama função de apresentar a palavra
input.addEventListener("keydown", function (ev) {
  ev.preventDefault();
  if (allowedLetterArray.includes(ev.key)) {
    if (input.value.length < 1) {
      input.value += ev.key;
    }
  }
  if (ev.key === "Enter") {
    letter.innerText += " " + input.value + " ";
    tryAreaDiv.appendChild(letter);
    choosenLetter = input.value;
    wordApresentation();
    input.value = "";
  }
  if (ev.key === "Backspace") {
    input.value = "";
  }
});

// Função que checa se a letra está no array e caso esteja, uma string é concatenada com a letra, caso contrário não é feito alteração
function wordApresentation() {
  let partialResult = "";
  let testScore = false;
  for (let i = 0; i < worldLength; i++) {
    if (choosenLetter == wordChosed[i]) {
      testScore = true;
      wordArray[i] = choosenLetter;
    }
    partialResult += wordArray[i];
  }
  // Se não tiver acertado nada, a imagem progride
  if (testScore === false) {
    score--;
    image.src = "../images/" + imageCount + ".jpg";
    imageCount++;
    // Encerra o jogo se zerar os pontos
    if (score === 0) {
      endGame();
    }
  }
  // Ecerra o jogo se completar a palavra
  p.innerText = partialResult;
  if (p.innerText === wordChosed) {
    endGame();
  }
}

// Função que encerra o jogo dando o resultado na página e criand um botão reinicia
function endGame() {
  const result = document.createElement("p");
  const button = document.createElement("button");
  button.innerText = "JOGAR NOVAMENTE";
  button.id = "replay-button";
  button.addEventListener("click", function () {
    location.reload();
  });
  replayGameDiv.appendChild(button);
  if (score === 0) {
    result.id = "lose-message";
    result.innerText = "VOCÊ PERDEU";
    resultArea.appendChild(result);
    showWord();
    return;
  }
  result.id = "win-message";
  result.innerText = "VOCÊ GANHOU";
  resultArea.appendChild(result);
}

// Mostrar palavra
function showWord() {
  const p = document.createElement("p");
  p.id = "result-word";
  p.innerText = "A palavra era " + wordChosed;
  resultArea.appendChild(p);
}
