const vagas = [];

function listarVagas() {
  const result = vagas.reduce(function (textoFinal, vaga, indice) {
    textoFinal +=
      indice +
      ". " +
      vaga.nome +
      " (" +
      vaga.candidatos.length +
      " candidatos) \n";
    return textoFinal;
  }, "");

  alert(result);
}

function criarVaga() {
  const nome = prompt("Insira o nome da vaga");
  const descricao = prompt("Insira a descrição da vaga");
  const dataLimite = prompt("Insira a data limite da vaga");
  const confirmacao = confirm(
    "Deseja criar a seguinte vaga? \nNome: " +
      nome +
      "\nDescrição: " +
      descricao +
      "\nData limite: " +
      dataLimite
  );
  if (confirmacao) {
    const vaga = { nome, descricao, dataLimite, candidatos: [] };
    vagas.push(vaga);
  } else {
    alert("Vaga descartada");
  }
}

function visualizarVaga() {
  const indice = parseInt(
    prompt("Insira o índice da vaga que deseja visualizar")
  );
  const nomeCandidatos = vagas[indice].candidatos.reduce(function (
    nomes,
    vaga
  ) {
    nomes += "\n. " + vaga;
    return nomes;
  },
  "");

  alert(
    "Indice: " +
      indice +
      "\nNome: " +
      vagas[indice].nome +
      "\nDescrição: " +
      vagas[indice].descricao +
      "\nData limite: " +
      vagas[indice].dataLimite +
      "\nQuantidade de candidatos: " +
      vagas[indice].candidatos.length +
      "\nCandidatos: " +
      nomeCandidatos
  );
}

function inscreverCandidato() {
  const nome = prompt("Insira o nome do candidato");
  const indice = parseInt(
    prompt("Insira o índice da vaga que deseja inscrevê-lo")
  );
  const confirmacao = confirm(
    "Deseja inscrever na seguinte vaga? \nNome: " +
      vagas[indice].nome +
      "\nDescrição: " +
      vagas[indice].descricao +
      "\nData limite: " +
      vagas[indice].dataLimite
  );
  if (confirmacao) {
    vagas[indice].candidatos.push(nome);
  } else {
    alert("Inscrição descartada");
  }
}

function excluirVaga() {
  const indice = parseInt(
    prompt("Insira o índice da vaga que dsesja apagar: ")
  );
  const vaga = vagas[indice];
  const confirmacao = confirm(
    "Deseja apagar a seguinte vaga? \nNome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite
  );
  if (confirmacao) {
    vagas.splice(indice, 1);
    alert("Vaga excluída");
  } else {
    alert("A vaga foi mantida");
  }
}

function menu() {
  let escolha = parseInt(
    prompt(
      "SISTEMA DE VAGAS DE EMPREGO \n1. Listar vagas \n2. Criar vaga \n3. Visualizar vaga \n4. Inscrever candidato \n5. Excluir vaga \n6. Sair"
    )
  );
  return escolha;
}

function executar() {
  let escolha = 0;
  do {
    escolha = menu();
    switch (escolha) {
      case 1:
        listarVagas();
        break;
      case 2:
        criarVaga();
        break;
      case 3:
        visualizarVaga();
        break;
      case 4:
        inscreverCandidato();
        break;
      case 5:
        excluirVaga();
        break;
      case 6:
        alert("Programa encerrado");
        break;
      default:
        alert("Opção inválida");
    }
    console.log(vagas);
  } while (escolha !== 6);
}

executar();
