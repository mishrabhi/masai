let page = 1;
let flag = false; //flag is passed to stop fetch call when data is still loading
let container = document.getElementById("container");

//fetching data
async function getData() {
  try {
    let res = await fetch(
      `https://jsonplaceholder.typicode.com/photos?_page=${page}_limit=10`
    );
    let data = await res.json();
    console.log(data);
    displayData(data);
  } catch (error) {
    console.log(error);
  }
}

getData(`https://jsonplaceholder.typicode.com/photos?_page=${page}_limit=10`);

//displaying data
function displayData(data) {
  data.forEach((ele) => {
    let card = document.createElement("div");
    let image = document.createElement("img");
    image.src = ele.url;

    let title = document.createElement("h6");
    title.textContent = ele.title;

    card.append(image, title);
    container.append(card);
  });
  flag = true;
}

//infinite scrolling
window.addEventListener("scroll", function () {
  let clientHeight = document.documentElement.clientHeight;
  let scrollHeight = document.documentElement.scrollHeight;
  let scrollTop = document.documentElement.scrollTop;
  console.log(clientHeight, scrollHeight, scrollTop);

  if (Math.ceil(scrollHeight - clientHeight) <= Math.ceil(scrollTop)) {
    page++; //incrementing page
    getData(
      `https://jsonplaceholder.typicode.com/photos?_page=${page}_limit=10`
    );
    flag = false;
  }
});
