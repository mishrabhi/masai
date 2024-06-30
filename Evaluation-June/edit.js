const url = `http://localhost:3000/tasks`;

document.getElementById("task-form").addEventListener("submit", function () {
  event.preventDefault();
  updateData();
});

async function updateData() {
  let id = localStorage.getItem("EditID");
  console.log(id);
  let title = document.getElementById("task-title").value;
  let description = document.getElementById("task-description").value;
  let status = document.getElementById("task-status").value;
  let dueDate = document.getElementById("task-due-date").value;
  let obj = {
    title,
    description,
    status,
    dueDate,
  };
  console.log(obj);

  await fetch(`${url}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  window.location.href = "index.html";
}
