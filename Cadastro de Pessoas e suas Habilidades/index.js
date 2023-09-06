// Retorna um label com texto e for
function createLabel(text, htmlFor) {
  const label = document.createElement("label");
  label.innerText = text;
  label.htmlFor = htmlFor;
  return label;
}

// Retorna um input com id, nome, tipo e valor
function createInput(id, name, type, value) {
  const input = document.createElement("input");
  input.type = type;
  input.id = id;
  input.name = name;
  input.value = value;
  return input;
}

// Adiciona uma linha de habilidade contendo um campo de texto, três radios e um botão que remove a própria linha
function addSkill() {
  const li = document.createElement("li");
  peopleCount++;
  li.id = "row-" + peopleCount;
  li.className = "newRow";

  // Campo de texto para o nome da habilidade
  const skillNameLabel = createLabel(
    "Nome da habilidade: ",
    "skill-name-id-" + peopleCount
  );
  const skillNameInput = createInput(
    "skill-name-id-" + peopleCount,
    "skill-name",
    "text",
    ""
  );

  // Área de tempos de experiências
  const h4 = document.createElement("h4");
  h4.innerText = "Tempo de experiência:";

  // 0-2 anos
  const id1 = "radio-input-" + peopleCount + ".1";
  const label1 = createLabel("0-2 anos", id1);
  const input1 = createInput(
    id1,
    "radio-input-" + peopleCount,
    "radio",
    "0-2 anos"
  );

  // 3-4 anos
  const id2 = "radio-input-" + peopleCount + ".2";
  const label2 = createLabel("3-4 anos", id2);
  const input2 = createInput(
    id2,
    "radio-input-" + peopleCount,
    "radio",
    "3-4 anos"
  );

  // 5+ anos
  const id3 = "radio-input-" + peopleCount + ".3";
  const label3 = createLabel("5+ anos", id3);
  const input3 = createInput(
    id3,
    "radio-input-" + peopleCount,
    "radio",
    "5+ anos"
  );

  // Botão de remoção da própria linha
  const btnRemove = document.createElement("button");
  btnRemove.innerText = "Remover";
  btnRemove.id = "btn-remove-" + peopleCount;
  btnRemove.addEventListener("click", function () {
    li.remove();
  });

  // Inserção dos elementos na linha
  li.append(
    skillNameLabel,
    skillNameInput,
    h4,
    input1,
    label1,
    input2,
    label2,
    input3,
    label3,
    btnRemove
  );

  // Inserção da linha na lista
  skillList.appendChild(li);
}

// Variáveis globais
const people = [];
let peopleCount = 0;
const addSkillBtn = document.getElementById("add-skill-btn");
const skillList = document.getElementById("skills-list");
const form = document.getElementById("register-form");

// Registra a pessoa com todos os dados inseridos em um objeto colocando por fim, em um vetor
function registerPerson(ev) {
  ev.preventDefault();

  const rows = document.querySelectorAll(".newRow");
  const personName = document.getElementById("fullname");
  const skills = [];
  let nameCheck = true;

  rows.forEach(function (row) {
    const skillName = document
      .querySelector("#" + row.id + ' input[name="skill-name"]')
      .value.trim();

    // Confere se o nome da habilidade foi preenchido, caso contrário a iteração é interromída
    if (skillName === "") {
      nameCheck = false;
      return;
    }

    const expRadio = document.querySelector(
      "#" + row.id + " input[type='radio']:checked"
    ).value;
    skills.push({ skillName, expRadio });
  });

  // Confere se o nome foi preenchido
  if (personName.value.trim() === "") {
    alert("Por favor, insira o nome da pessoa");
    return;
  }

  // Confere se tem pelo menos uma habilidade inserida
  if (skills.length === 0) {
    alert("Por favor, insira pelo menos uma habilidade");
    return;
  }

  // Alerta sobre a ausência de um dos nomes e encerra função
  if (!nameCheck) {
    alert("Uma das habilidades não receberam um nome!");
    return;
  }

  people.push({ name: personName.value, skills });
  alert("Pessoa cadastrada!");
  console.log(people);

  // Reinicia os valores
  personName.value = "";
  rows.forEach(function (row) {
    row.remove();
  });
}

form.addEventListener("submit", registerPerson);

addSkillBtn.addEventListener("click", addSkill);
