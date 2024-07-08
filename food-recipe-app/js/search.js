import { createNavbar } from "./navbar.js";
createNavbar();

let searchBtn = document.getElementById("searchButton");
searchBtn.addEventListener("click", function () {
  setupSearch();
});

async function setupSearch() {
  let query = document.getElementById("searchInput").value;
  try {
    let res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    let data = await res.json();
    let meals = data.meals;
    console.log(meals);
    displayResults(meals);
  } catch (error) {
    console.log(error);
  }
}

function displayResults(meals) {
  const resultDiv = document.getElementById("results");
  resultDiv.innerHTML = "";
  meals.forEach((ele) => {
    let card = document.createElement("div");
    let mealName = document.createElement("h2");
    mealName.textContent = ele.strMeal;

    let img = document.createElement("img");
    img.src = ele.strMealThumb;

    let desc = document.createElement("p");
    desc.textContent = ele.strInstructions;

    card.append(mealName, img, desc);
    resultDiv.append(card);
  });
}
