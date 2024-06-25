const URL = `http://localhost:3000/tickets`;

const form = document.getElementById("taskForm");

form.addEventListener("submit", () => {
  event.preventDefault();
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let status = document.getElementById("status").value;
  let dueDate = document.getElementById("dueDate").value;

  var obj = {
    title,
    description,
    status,
    dueDate,
  };
  console.log(obj);

  createTask(obj);
});

async function createTask(obj) {
  await fetch(`${URL}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  window.location.href = "index.html";
}
