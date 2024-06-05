let cartData = JSON.parse(localStorage.getItem("cart-data")) || [];
let container = document.getElementById("container");

displayUsers(cartData);

function displayUsers(cartData) {
  container.innerHTML = "";
  cartData.forEach((ele, i) => {
    let card = document.createElement("div");

    let name = document.createElement("h4");
    name.textContent = ele.name;

    let username = document.createElement("p");
    username.textContent = ele.username;

    let email = document.createElement("p");
    email.textContent = ele.email;

    let btn = document.createElement("button");
    btn.textContent = "Remove";
    btn.addEventListener("click", function () {
      removeData(ele, i);
    });

    card.append(name, username, email, btn);
    container.append(card);
  });
}

function removeData(ele, i) {
  cartData.splice(i, 1);
  displayUsers(cartData);
  localStorage.setItem("cart-data", JSON.stringify(cartData));
}
