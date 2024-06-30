const url = `http://localhost:3000/tasks?_page=1&_limit=5`;

const getData = async (url) => {
  try {
    let res = await fetch(`${url}`);
    let tasks = await res.json();
    console.log(tasks);
    displayData(tasks);
  } catch (error) {
    console.log(error);
  }
};

getData(url);

function displayData(tasks) {
  let container = document.getElementById("container");
  container.innerHTML = "";
  tasks.forEach((ele) => {
    let card = document.createElement("div");
    card.className = "card";

    let title = document.createElement("h2");
    title.textContent = `Title: ${ele.title}`;

    let description = document.createElement("p");
    description.textContent = `Description: ${ele.description}`;

    let status = document.createElement("h6");
    status.textContent = `Status: ${ele.status}`;

    let dueDate = document.createElement("p");
    dueDate.textContent = `DueDate: ${ele.dueDate}`;

    let editBtn = document.createElement("button");
    editBtn.className = "editBtn";
    editBtn.textContent = "Edit Task";
    editBtn.addEventListener("click", function () {
      localStorage.setItem("EditID", ele.id);
      window.location.href = "edit.html";
    });

    let delBtn = document.createElement("button");
    delBtn.className = "delBtn";
    delBtn.textContent = "Delete Task";
    delBtn.addEventListener("click", function () {
      deleteTask(ele.id);
    });

    card.append(title, description, status, dueDate, editBtn, delBtn);
    container.append(card);
  });
}

async function deleteTask(id) {
  try {
    await fetch(`${url}/${id}`, { method: "DELETE" });
  } catch (error) {
    console.log("Task deletion failed");
  }
  getData(url);
}

let filter = document.getElementById("filter");
filter.addEventListener("input", function () {
  filterData();
});

function filterData() {
  let filterVal = filter.value;
  console.log(filterVal);
  getData(`${url}&status=${filterVal}`);
}

//pagination
