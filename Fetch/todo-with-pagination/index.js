let url = `https://jsonplaceholder.typicode.com/todos?_page=1&_limit=12`;

const getData = async (url) => {
  try {
    let res = await fetch(`${url}`);
    let data = await res.json();
    console.log(data);
    displayData(data);
  } catch (error) {
    console.log(error);
  }
};

getData(url);

let container = document.getElementById("container");
container.innerHTML = "";

function displayData(data) {
  data.forEach((ele) => {
    let card = document.createElement("div");
    card.className = "card";

    let id = document.createElement("p");
    id.textContent = `Id: ${ele.id}`;

    let title = document.createElement("h3");
    title.textContent = `Title: ${ele.title}`;

    let status = document.createElement("p");
    status.textContent = `Completed: ${ele.completed}`;

    card.append(id, title, status);
    container.append(card);
  });
}

let page = 1;
let next = document.getElementById("next");
next.addEventListener("click", function () {
  page++;
  nextData();
});

let prev = document.getElementById("prev");
prev.addEventListener("click", function () {
  if (page == 1) {
    prev.button == disabled;
  } else {
    page--;
  }
  nextData();
});

function nextData() {
  container.innerHTML = "";
  getData(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=12`);
}
