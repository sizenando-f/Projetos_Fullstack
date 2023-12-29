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
