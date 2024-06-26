//base url
const URL = `http://localhost:3000/tickets`;

document.getElementById("taskForm").addEventListener("submit", function () {
  updateData();
});

async function updateData() {
  let id = localStorage.getItem("EditTask");
  console.log(id);
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let status = document.getElementById("status").value;
  let dueDate = document.getElementById("dueDate").value;
  let obj = {
    title,
    description,
    status,
    dueDate,
  };
  console.log(obj);

  await fetch(`${URL}/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  window.location.href = "index.html";
}
