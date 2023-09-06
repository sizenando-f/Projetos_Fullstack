$("#infoPopup").hide();
$(".congrats").hide();

document.addEventListener("DOMContentLoaded", () => {
  // Sizenando
  $("#sizenandoFranca").click(() => {
    $("#infoPopup").show("fast");
    $("#popupTitle").text("Sizenando França");
    $("#popupText").text(
      `Sizenando é um estudante de Engenharia de Software na Unigran, atualmente no 5º semestre. Ele está focado em se tornar um desenvolvedor full stack, com conhecimentos em HTML, CSS, Bootstrap e JavaScript. Sizenando está empenhado em aprimorar suas habilidades e está atualmente cursando um programa técnico de Full Stack JavaScript, abrangendo tópicos avançados como webpack, babel, módulos e npm. Com uma paixão pela tecnologia, ele busca criar soluções inovadoras para desafios do mundo digital.`
    );
  });
  // Carlos Mendes
  $("#carlosMendes").click(() => {
    $("#infoPopup").show("fast");
    $("#popupTitle").text("Carlos Mendes");
    $("#popupText").text(
      `Como Chef Executivo, Carlos Mendes é responsável por liderar a equipe de culinária, desenvolver novos pratos e garantir a qualidade e excelência gastronômica em cada refeição oferecida pela empresa. Sua experiência e paixão pela culinária são evidentes em cada prato criado.`
    );
  });
  // Ana Torres
  $("#anaTorres").click(() => {
    $("#infoPopup").show("fast");
    $("#popupTitle").text("Ana Torres");
    $("#popupText").text(
      `Ana Torres é a Gerente de Atendimento ao Cliente, encarregada de garantir a satisfação dos clientes, lidar com suas solicitações e garantir que cada interação com a empresa seja uma experiência positiva. Com sua abordagem calorosa e atenciosa, Ana assegura um atendimento excepcional a cada cliente.`
    );
  });
  // Sofia Oliveira
  $("#sofiaOliveira").click(() => {
    $("#infoPopup").show("fast");
    $("#popupTitle").text("Sofia Oliveira");
    $("#popupText").text(
      `Como Nutricionista Chefe, Sofia Oliveira desempenha um papel crucial na criação de cardápios balanceados e nutritivos. Ela supervisiona a qualidade nutricional de cada prato, garantindo que as refeições sejam saudáveis, saborosas e atendam às necessidades dietéticas dos clientes. A expertise de Sofia contribui para uma abordagem saudável e equilibrada em todos os aspectos da empresa.`
    );
  });
  $("#closeBtn").click(() => {
    $("#infoPopup").hide("fast");
  });

  $("#buyBasicBtn").click((ev) => {
    ev.preventDefault();
    if (confirm("Você tem certez que deseja efetuar a compra?")) {
      $(".congrats").show("fast");
    }
    setTimeout(() => {
      $(".congrats").hide("slow");
    }, 4000);
  });

  $("#buyPremiumBtn").click((ev) => {
    ev.preventDefault();
    if (confirm("Você tem certez que deseja efetuar a compra?")) {
      $(".congrats").show("fast");
    }
    setTimeout(() => {
      $(".congrats").hide("slow");
    }, 4000);
  });
});
