// js/navbar.js
export function createNavbar() {
  const navbar = document.createElement("nav");
  navbar.innerHTML = `
        <div class="navbar">
            <a href="../index.html">Home</a>
            <a href="../pages/search.html">Search</a>
            <a href="../pages/recipeOfTheDay.html">Recipe of the Day</a>
            <a href="../pages/randomRecipes.html">Random Recipes</a>
        </div>
    `;
  document.body.insertBefore(navbar, document.body.firstChild);
}
