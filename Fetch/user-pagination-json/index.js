let url = `https://jsonplaceholder.typicode.com/users?_page=1&_limit=6`;

//function to fetch the data
const getData = async (url) => {
  try {
    let res = await fetch(`${url}`);
    let data = await res.json();
    console.log(data);
    displayUserData(data);
  } catch (error) {
    console.log(error);
  }
};

getData(url); //function call to get data

let container = document.getElementById("container");
container.textContent = "";

//display Data function
function displayUserData(data) {
  data.forEach((ele) => {
    let card = document.createElement("div");
    card.className = "card";

    let name = document.createElement("h2");
    name.textContent = ele.name;

    let username = document.createElement("p");
    username.textContent = `Username: ${ele.username}`;

    let email = document.createElement("p");
    email.textContent = `Email: ${ele.email}`;

    let address = document.createElement("p");
    address.textContent = `City: ${ele.address.city}`;

    let phone = document.createElement("p");
    phone.textContent = `Phone: ${ele.phone}`;

    let website = document.createElement("p");
    website.textContent = `Website: ${ele.website}`;

    card.append(name, username, email, address, phone, website);
    container.append(card);
  });
}

//pagination

//selecting prev button and adding an eventlistener on it when clicked
let page = 1;
let prevBtn = document.getElementById("prev");
prevBtn.addEventListener("click", function () {
  if (page == 1) {
    prevBtn.button == disabled;
  } else {
    page--;
  }
  paginatedData();
});

//selecting next button and adding an eventlistener on it when clicked
let nextBtn = document.getElementById("next");
nextBtn.addEventListener("click", function () {
  page++;
  paginatedData();
});

//function to get paginated data
function paginatedData() {
  container.innerHTML = "";
  getData(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=6`);
}
