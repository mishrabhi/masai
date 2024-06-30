const url = `http://localhost:3000/tasks`;

const form = document.getElementById("task-form-element");

form.addEventListener("submit", () => {
  event.preventDefault();
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
  createTask(obj);
});

async function createTask(obj) {
  try {
    let res = await fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    window.location.href = "index.html";
  } catch (error) {
    console.log(error);
  }
}
