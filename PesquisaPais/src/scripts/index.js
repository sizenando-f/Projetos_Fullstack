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
            document.getElementById("currency-label").innerText = currency[0];
            document.getElementById("currency-name-label").innerText =
              currency[1].name;
            document.getElementById("symbol-label").innerText =
              currency[1].symbol;
          });
          document.getElementById("capital-label").innerText = country.capital;
          document.getElementById("region-label").innerText = country.region;
          document.getElementById("subregion-label").innerText =
            country.subregion;
          let languages = "";
          Object.entries(country.languages).forEach((language) => {
            languages += `${language[1]} `;
            document.getElementById("language-label").innerText = languages;
          });
          document.getElementById("population-label").innerText =
            country.population;
          document.getElementById("area-label").innerText = country.area;
          document.getElementById(
            "latlng-label"
          ).innerText = `${country.latlng[0]}, ${country.latlng[1]}`;
          if (country.landlocked)
            document.getElementById("landlocked-label").innerText = "Yes";
          else document.getElementById("landlocked-label").innerText = "No";
          document.getElementById("border-label").innerText =
            country.borders ?? "Does not exist";
          if (country.gini) {
            Object.entries(country.gini).forEach((gini) => {
              document.getElementById("gini-label").innerText = gini[1];
            });
          } else {
            document.getElementById("gini-label").innerText = "Does not exist";
          }

          document.getElementById("signs-label").innerText = country.car.signs;
          document.getElementById("street-label").innerText = country.car.side;
          document.getElementById("continent-label").innerText =
            country.continents;
          document.getElementById("coatofarms-flag").src = "";
          document.getElementById("coatofarms-flag").src =
            country.coatOfArms.svg;
          document.getElementById("postalcode-label").innerText =
            country.postalCode.format;
          let idd = country.idd.root;
          country.idd.suffixes.forEach((suffix) => {
            idd += suffix;
          });
          document.getElementById("idd-label").innerText = idd;
          document.getElementById("timezones-label").innerText =
            country.timezones;
          document.getElementById("start-label").innerText =
            country.startOfWeek;
        }
      });
    } else {
      changeInputColor(0);
    }
  });
