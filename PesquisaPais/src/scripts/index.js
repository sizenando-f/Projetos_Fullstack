async function getCountries() {
  const result = await fetch("https://restcountries.com/v3.1/all");
  const countries = await result.json();
  return countries;
}

async function initializeDatalist() {
  const countries = await getCountries();
  countries.forEach((country) => {
    const option = document.createElement("option");
    option.value = country.name.common;
    document.querySelector("#countries-options").append(option);
  });
}

initializeDatalist();

async function countryValidation(countryName) {
  const countries = await getCountries();
  try {
    if (!countries.find((country) => countryName == country.name.common))
      throw new Error("invalid input");
    return 1;
  } catch (error) {
    return 0;
  }
}

function changeInputColor(code) {
  const countryInput = document.getElementById("country-input");
  if (code) {
    countryInput.classList.remove("input-error");
    countryInput.classList.add("input-right");
  } else {
    countryInput.classList.remove("input-right");
    countryInput.classList.add("input-error");
  }
}

document
  .getElementById("country-form")
  .addEventListener("submit", async (ev) => {
    ev.preventDefault();

    const countryInput = document.getElementById("country-input");
    const countries = await getCountries();

    if (await countryValidation(countryInput.value)) {
      changeInputColor(1);

      countries.forEach((country) => {
        if (country.name.common === countryInput.value) {
          document.getElementById("country-flag").src = country.flags.svg;
          document.getElementById("country-name-common").innerText =
            country.name.common;
          document.getElementById("country-name-official").innerText =
            country.name.official;
          document.getElementById("country-map-link").href =
            country.maps.googleMaps;
          document.getElementById("tld-label").innerText = country.tld;
          document.getElementById("cca2-label").innerText = country.cca2;
          document.getElementById("ccn3-label").innerText = country.ccn3;
          document.getElementById("cca3-label").innerText = country.cca3;
          document.getElementById("cioc-label").innerText =
            country.cioc ?? "Inexistent";
          if (country.independent)
            document.getElementById("independent-label").innerText = "Yes";
          else document.getElementById("independent-label").innerText = "No";
          if (country.unMember)
            document.getElementById("unMember-label").innerText = "Yes";
          else document.getElementById("unMember-label").innerText = "No";
          Object.entries(country.currencies).forEach((currency) => {
            console.log(currency[1]);
          });
        }
      });
    } else {
      changeInputColor(0);
    }
  });
