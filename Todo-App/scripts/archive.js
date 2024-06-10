var archiveRes = JSON.parse(localStorage.getItem("Deleteddata")) || [];
console.log(archiveRes);

displayData(archiveRes);

var filterVal = document.getElementById("priority-select");
filterVal.addEventListener("change", function () {
  filterData(archiveRes);
});

function filterData(archiveRes) {
  var Valfilter = filterVal.value;
  console.log(Valfilter);
  var filterArr = archiveRes.filter(function (ele) {
    return ele.rank === Valfilter;
  });
  console.log(filterArr);
  displayData(filterArr);
}

function displayData(archiveRes) {
  var tbody = document.querySelector("tbody");
  tbody.innerHTML = null;

  archiveRes.forEach(function (ele, i) {
    var tr1 = document.createElement("tr");

    var tdName = document.createElement("td");
    tdName.innerText = ele.name;

    var tdRank = document.createElement("td");
    tdRank.innerText = ele.rank;

    if (ele.rank === "medium") {
      tdRank.style.backgroundColor = "yellow";
    } else if (ele.rank === "high") {
      tdRank.style.backgroundColor = "red";
    }

    var btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.addEventListener("click", function () {
      deleteData(i);
    });

    tr1.append(tdName, tdRank, btn);
    tbody.append(tr1);
  });
}

function deleteData(ele, index) {
  archiveRes.splice(index, 1);
  localStorage.setItem("Deleteddata", JSON.stringify(archiveRes));
  displayData(archiveRes);
}
