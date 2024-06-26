const URL = `http://localhost:3000/tickets`;

const ticketContainer = document.getElementById("container");
document.addEventListener("DOMContentLoaded", () => {
  getData();
});

async function getData() {
  try {
    let res = await fetch(`${URL}`);
    let data = await res.json();
    console.log(data);
    displayData(data);
  } catch (error) {
    console.log(error);
  }
}

function displayData(data) {
  ticketContainer.innerHTML = "";
  data.forEach((ele) => {
    let card = document.createElement("tr");
    card.classList.add("card");

    let title = document.createElement("th");
    title.textContent = ele.title;

    let description = document.createElement("td");
    description.textContent = ele.description;

    let status = document.createElement("td");
    status.textContent = ele.status;

    let dueDate = document.createElement("td");
    dueDate.textContent = ele.dueDate;

    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit");
    editBtn.addEventListener("click", function () {
      localStorage.setItem("EditTask", ele.id);
      window.location.href = "update.html";
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete");
    deleteBtn.addEventListener("click", () => {
      deleteTask(ele.id);
    });

    let editCell = document.createElement("td");
    editCell.appendChild(editBtn);

    let deleteCell = document.createElement("td");
    deleteCell.appendChild(deleteBtn);

    card.append(title, description, status, dueDate, editCell, deleteCell);
    ticketContainer.append(card);
  });
}

async function deleteTask(id) {
  try {
    await fetch(`${URL}/${id}`, { method: "DELETE" });
  } catch (error) {
    console.log("Ticket deletion failed!");
  }

  getData();
}
