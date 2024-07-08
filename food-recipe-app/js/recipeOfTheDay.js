import { createNavbar } from "./navbar.js";
createNavbar();

async function recipeOfTheDay() {
  try {
    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
    let data = await res.json();
    let recipeOfTheDay = data.meals[0];
    console.log(recipeOfTheDay);
    displayRecipe(recipeOfTheDay);
  } catch (error) {
    console.log(error);
  }
}

recipeOfTheDay();

function displayRecipe(recipeOfTheDay) {
  let container = document.getElementById("recipeOfTheDay");

  let mealName = document.createElement("h2");
  mealName.textContent = recipeOfTheDay.strMeal;

  let image = document.createElement("img");
  image.src = recipeOfTheDay.strMealThumb;

  let desc = document.createElement("p");
  desc.textContent = recipeOfTheDay.strInstructions;

  container.append(image, mealName, desc);
}

export { recipeOfTheDay };
