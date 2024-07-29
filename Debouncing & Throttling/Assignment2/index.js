let input = document.getElementById("search");

input.addEventListener("input", function () {
  debounce(fetchData, 1000);
});

let timer;
function debounce(func, delay) {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    func();
  }, delay);
}

async function fetchData() {
  let inputVal = input.value;
  try {
    let res = await fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=f9f6a9fb&s=${inputVal}`
    );
    let data = await res.json();
    console.log(data);
    displayData(data.Search);
  } catch (error) {
    console.log(error);
  }
}

function displayData(data) {
  let container = document.getElementById("container");
  container.innerHTML = "";
  data.forEach((ele) => {
    let title = document.createElement("h2");
    title.textContent = ele.Title;
    title.setAttribute("data-imdbid", ele.imdbID); // Storing IMDb ID in an attribute
    title.addEventListener("click", () => fetchMovieDetails(ele.imdbID)); //arrow func
    container.append(title);
  });
}

//function to fetch the full movie details
async function fetchMovieDetails(imdbID) {
  try {
    let res = await fetch(
      `http://www.omdbapi.com/?i=${imdbID}&apikey=f9f6a9fb`
    );
    let data = await res.json();
    console.log(data);
    displayMovieDetails(data);
  } catch (error) {
    console.log(error);
  }
}

//function to display the full movie detail
function displayMovieDetails(data) {
  let container = document.getElementById("container");
  container.innerHTML = "";

  let title = document.createElement("h2");
  title.textContent = data.Title;

  let poster = document.createElement("img");
  poster.src = data.Poster;

  let year = document.createElement("p");
  year.textContent = `Year: ${data.Year}`;

  let genre = document.createElement("p");
  genre.textContent = `Genre: ${data.Genre}`;

  let plot = document.createElement("p");
  plot.textContent = `Plot: ${data.Plot}`;
  container.append(poster, title, year, genre, plot);
}
