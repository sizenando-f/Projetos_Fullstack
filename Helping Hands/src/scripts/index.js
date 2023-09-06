// ---------------------------------------------------------
// Return before use webpack and reactivate as a comment when coding
import "../../src/styles/css/style.css";
// ---------------------------------------------------------

window.onload = function () {
  $("#info-panel").hide();

  const infoPanelH3 = $("#info-panel").children()[1];
  const infoPanelP = $("#info-panel").children()[2];

  $(".difference-item").on("click", (ev) => {
    let eventId = ev.currentTarget.id;
    if (eventId === "diff-item-1") {
      infoPanelH3.innerText =
        "It will enable the realization of social projects";

      infoPanelP.innerText =
        "With your contribution, we will be able to provide resources and support for socially relevant projects, enabling them to be successful and reach their maximum impact potential.";
    } else if (eventId === "diff-item-2") {
      infoPanelH3.innerText = "Expand our volunteer community";

      infoPanelP.innerText =
        "With more resources, we will be able to attract and engage more passionate volunteers, connecting them with companies looking for volunteer help. This will result in more projects realized and an even greater social impact.";
    } else if (eventId === "diff-item-3") {
      infoPanelH3.innerText = "Will develop the Helping Hands platform";

      infoPanelP.innerText =
        "Your donation will help us to improve and enhance the functionality of our website, making it easier to use, safer and more efficient. This will allow more people to discover and participate in volunteering and social causes.";
    }

    $("#info-panel").show("fast");
  });

  $("#exit-info-panel-btn").on("click", () => {
    $("#info-panel").hide("fast");
  });

  const companiesBox = document.getElementById("companies-box");
  let companiesArray = JSON.parse(localStorage.getItem("companiesArray"));
  if (companiesArray) {
    companiesArray.forEach((el) => {
      const div = document.createElement("div");
      const h5 = document.createElement("h5");
      div.className = "company-item";
      h5.innerText = el.name;
      div.appendChild(h5);

      companiesBox.appendChild(div);
    });
  } else {
    const h2 = document.createElement("h2");
    h2.style.backgroundColor = "#c7c4ff";
    h2.style.padding = "1rem";
    h2.style.borderRadius = "1rem";
    h2.innerText = "There's no company registered :(";
    companiesBox.appendChild(h2);
  }
};

let prevScrollPos = $(window).scrollTop();

window.addEventListener("scroll", () => {
  let currentScrollPos = $(window).scrollTop();
  if (prevScrollPos > currentScrollPos) {
    $("#navbar").fadeIn();
  } else {
    $("#navbar").fadeOut();
  }

  prevScrollPos = currentScrollPos;
});
