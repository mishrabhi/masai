const baseUrl = `http://localhost:3000/products`;

const getTotalCount = async () => {
  try {
    let res = await fetch(baseUrl);
    let products = await res.json();
    return products.length;
  } catch (error) {
    console.log(error);
  }
};

const getData = async (url, queryparams = "") => {
  try {
    let res = await fetch(`${url}${queryparams}`);
    let totalCount = await getTotalCount(); //total number of data
    pagination(totalCount, 6);

    let products = await res.json();
    console.log(products);
    displayData(products);
  } catch (error) {
    console.log(error);
  }
};

getData(`${baseUrl}?_page=1&_limit=6`);

function displayData(products) {
  let container = document.getElementById("container");
  container.innerHTML = "";
  products.forEach((ele) => {
    let card = document.createElement("div");
    card.className = "card";

    let image = document.createElement("img");
    image.src = ele.image;

    let title = document.createElement("h2");
    title.textContent = ele.title;

    let description = document.createElement("p");
    description.textContent = ele.description;

    let category = document.createElement("h5");
    category.textContent = ele.category;

    let price = document.createElement("p");
    price.textContent = `$${ele.price}`;

    let rating = document.createElement("p");
    rating.textContent = `Rating: ${ele.rating.rate}`;

    card.append(image, title, description, category, price, rating);
    container.append(card);
  });
}

// Sorting
let sort = document.getElementById("sort");
sort.addEventListener("input", function () {
  sortDataByPrice();
});

function sortDataByPrice() {
  let sortVal = sort.value;
  console.log(sortVal);
  getData(`${baseUrl}?_page=1&_limit=6`, `&_sort=price&_order=${sortVal}`);
}

// Filtering
let filter = document.getElementById("filter");
filter.addEventListener("input", function () {
  filterDataByCategory();
});

function filterDataByCategory() {
  let filterValue = filter.value;
  getData(`${baseUrl}?_page=1&_limit=6`, `&category=${filterValue}`);
}

// Pagination
let paginationDiv = document.getElementById("pagination-wrapper");
function pagination(total, limit) {
  paginationDiv.innerHTML = "";
  let numberOfBtn = Math.ceil(total / limit); // no. of pagination buttons required to display total data
  console.log(numberOfBtn);
  for (let i = 1; i <= numberOfBtn; i++) {
    let btn = document.createElement("button");
    btn.textContent = i;
    btn.addEventListener("click", function () {
      getData(`${baseUrl}?`, `_page=${i}&_limit=6`);
    });
    paginationDiv.append(btn);
  }
}
