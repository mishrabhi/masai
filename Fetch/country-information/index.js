document.addEventListener("DOMContentLoaded", () => {
  fetchCountries();
});

//function to fetch country data
async function fetchCountries() {
  {
    try {
      let res = await fetch(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries`
      );
      let countryData = await res.json();
      countries = countryData.data; //getting the data required to display
      displayCountries(countries); //calling displayCountries function to display data
    } catch (error) {
      console.log("Something went wrong!");
    }
  }
}

//dunction to display country data
function displayCountries(countries) {
  countryContainer = document.getElementById("country-container");
  countryContainer.innerHTML = "";
  countries.forEach((country) => {
    const countryCard = document.createElement("div");
    countryCard.className = "country-card";

    const name = document.createElement("h2");
    name.innerText = country.country;
    console.log(name);

    const rank = document.createElement("h6");
    rank.innerText = country.Rank;

    const population = document.createElement("p");
    population.innerText = country.population;

    countryCard.append(name, rank, population);
    countryContainer.append(countryCard);
  });
}
