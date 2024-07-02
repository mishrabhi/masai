//adding eventlistener on login button
document.getElementById("login").addEventListener("click", function () {
  postData();
});

//sign-in function
async function postData() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  console.log(username, password);

  let obj = {
    username,
    password,
  };
  try {
    let res = await fetch(`https://json-with-auth.onrender.com/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });

    let data = await res.json();
    console.log(data);
    id = data.user.id;
    console.log(id);

    if (data.accessToken) {
      let message = document.getElementById("message");
      message.textContent = `Hey ${data.user.username}, Welcome Back!`;
      document.getElementById("todo-container").style.display = "block";

      //storing token and id in localStorage
      localStorage.setItem("localAccessToken", data.accessToken);
      localStorage.setItem("userId", data.user.id);
    }
  } catch (error) {
    console.log(error);
  }
}

//selecting fetchTodo button and adding eventlistener on click
let fetchBtn = document.getElementById("fetch-todo");
fetchBtn.addEventListener("click", function () {
  fetchData(); //function call to fetch data
});

//function to fetch todos
async function fetchData(accessToken, id) {
  id = localStorage.getItem("userId");
  accessToken = localStorage.getItem("localAccessToken");
  try {
    let res = await fetch(
      `https://json-with-auth.onrender.com/todos?userId=${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    let fetchedTodo = await res.json();
    console.log(fetchedTodo);
    displayTodo(fetchedTodo); //function call to display todos
  } catch (error) {
    console.log(error);
  }
}

//function to display todos
function displayTodo(fetchedTodo) {
  let container = document.getElementById("container");
  container.innerHTML = "";
  fetchedTodo.forEach((ele) => {
    let card = document.createElement("div");
    card.className = "card";

    let title = document.createElement("h2");
    title.textContent = ele.title;

    let status = document.createElement("p");
    status.textContent = ele.completed;

    card.append(title, status);
    container.append(card);
  });
}
