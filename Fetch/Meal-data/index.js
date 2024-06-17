// This problem aims to evaluate the developer's ability to make fetch requests to an external API and handle the retrieved data. The task involves creating a simple web application with two buttons that trigger API requests to fetch meal data based on specific criteria.

//Use the provided API (BaseURL: https://www.themealdb.com/api.php?ref=apilist.fun) to create a web application with two buttons:

// The "Get Category Data" button (id: get-category-data) should fetch meal data for a specific category (e.g., seafood) and print the result into the console.

// API: https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood

// The "Get Ingredient Data" button (id: get-ingredient-data) should fetch meal data where the main ingredient is "chicken_breast" and print the result into the console.

// API: https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast

// Both fetch operations should be implemented in the "getCategoriesData" and "getIngredientData" functions, respectively. Use the provided API endpoints and ensure to handle errors using a try-catch block. If the API request fails, return the text "something went wrong." Use the fetch keyword to retrieve the data.

let btn1 = document.getElementById("get-category-data");
let btn2 = document.getElementById("get-ingredient-data");

//Category Data

//adding click event on button
btn1.addEventListener("click", function () {
  getCategoryData();
});

//function to fetch the data
async function getCategoryData() {
  {
    try {
      let res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`
      );
      let data = await res.json();
      console.log(data);
    } catch (error) {
      console.log("Something went wrong");
    }
  }
}
//calling the function to fetch data
getCategoryData();

//Ingredient Data

//adding click event on button
btn2.addEventListener("click", function () {
  getIngredientData();
});

//function to fetch the data
async function getIngredientData() {
  {
    try {
      let res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`
      );
      let data = await res.json();
      console.log(data);
    } catch (error) {
      console.log("Something went wrong");
    }
  }
}
//calling the function to fetch data
getIngredientData();
