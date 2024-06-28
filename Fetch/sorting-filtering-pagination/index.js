const url = `http://localhost:3000/products`;

const getData = async (url) => {
  try {
    let res = await fetch(`${url}`);
    let products = await res.json();
    console.log(products);
    displayData(products);
  } catch (error) {
    console.log(error);
  }
};

getData(url);

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
    price.textContent = ele.price;

    let rating = document.createElement("p");
    rating.textContent = ele.rating.rate;

    card.append(image, title, description, category, price, rating);
    container.append(card);
  });
}

//sorting

let sort = document.getElementById("sort");
sort.addEventListener("input", function () {
  sortDataByPrice();
});

function sortDataByPrice() {
  let sortVal = sort.value;
  console.log(sortVal);
  getData(`${url}?_sort=price&_order=${sortVal}`);
}
