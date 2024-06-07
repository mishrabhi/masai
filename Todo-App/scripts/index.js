var btn = document.getElementById("add-todo");
var arr = JSON.parse(localStorage.getItem("data")) || [];

// Display existing data on page load
displayData(arr);

btn.addEventListener("click", function (event) {
  event.preventDefault();
  getData();
  console.log(arr);
  displayData(arr);
});

// Getting data from form
function getData() {
  var input1 = document.getElementById("todo-input").value;
  var select1 = document.getElementById("priority-select").value;

  if (input1 === "" || select1 === "") {
    alert("Please fill all the fields");
  } else {
    var obj = {
      name: input1,
      rank: select1,
    };
    arr.push(obj);

    localStorage.setItem("data", JSON.stringify(arr));
    displayData(arr);
  }
}

// For displaying data
function displayData(arr) {
  var tbody = document.querySelector("tbody");
  tbody.innerHTML = null;

  arr.forEach(function (ele, i) {
    var tr1 = document.createElement("tr");

    var tdName = document.createElement("td");
    tdName.innerText = ele.name;

    var tdRank = document.createElement("td");
    tdRank.innerText = ele.rank;

    var tdStatus = document.createElement("td");
    tdStatus.innerText = "pending";

    if (ele.rank === "medium") {
      tdRank.style.backgroundColor = "yellow";
    } else if (ele.rank === "high") {
      tdRank.style.backgroundColor = "red";
    }

    var btn = document.createElement("button");
    btn.innerText = "Archive";
    btn.addEventListener("click", function () {
      deleteData(i);
    });

    tr1.append(tdName, tdRank, tdStatus, btn);
    tbody.append(tr1);
  });
}

// Deleting data and updating localStorage
function deleteData(index) {
  arr.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(arr));
  displayData(arr);
}
