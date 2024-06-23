document.addEventListener("DOMContentLoaded", () => {
  fetchCountries();
});

let countryContainer = document.getElementById("country-container");

async function fetchCountries() {
  {
    try {
      let res = await fetch(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries`
      );
      let countryData = await res.json();
      console.log(countryData);
    } catch (error) {
      console.log("Something went wrong!");
    }
  }
}
