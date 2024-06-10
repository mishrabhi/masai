var dice = document.getElementById("rollButton");
dice.addEventListener("click", function () {
  rollDice();
});
function rollDice() {
  // Roll three dice
  const diceA = getRandomDiceValue();
  const diceB = getRandomDiceValue();
  const diceC = getRandomDiceValue();

  // Update dice values
  document.getElementById("diceA").textContent = diceA;
  document.getElementById("diceB").textContent = diceB;
  document.getElementById("diceC").textContent = diceC;

  // Determine the winner
  const diceValues = [
    { id: "diceA", value: diceA },
    { id: "diceB", value: diceB },
    { id: "diceC", value: diceC },
  ];

  diceValues.sort((a, b) => b.value - a.value);

  // Reset dice colors
  resetDiceColors();

  // Determine and display the winner and set colors
  setDiceColors(diceValues);

  if (
    diceValues[0].value === diceValues[1].value &&
    diceValues[1].value === diceValues[2].value
  ) {
    document.getElementById("winner").textContent = "It's a tie!";
  } else if (diceValues[0].value === diceValues[1].value) {
    document.getElementById("winner").textContent =
      "It's a tie between A and B!";
  } else if (diceValues[1].value === diceValues[2].value) {
    document.getElementById("winner").textContent =
      "It's a tie between B and C!";
  } else {
    const winner =
      diceValues[0].id === "diceA"
        ? "A"
        : diceValues[0].id === "diceB"
        ? "B"
        : "C";
    document.getElementById(
      "winner"
    ).textContent = `Winner is Member ${winner}`;
  }
}

function getRandomDiceValue() {
  return Math.floor(Math.random() * 6) + 1;
}

function resetDiceColors() {
  document.getElementById("diceA").style.backgroundColor = "";
  document.getElementById("diceB").style.backgroundColor = "";
  document.getElementById("diceC").style.backgroundColor = "";
}

function setDiceColors(diceValues) {
  if (
    diceValues[0].value === diceValues[1].value &&
    diceValues[1].value === diceValues[2].value
  ) {
    document.getElementById(diceValues[0].id).style.backgroundColor = "blue";
    document.getElementById(diceValues[1].id).style.backgroundColor = "blue";
    document.getElementById(diceValues[2].id).style.backgroundColor = "blue";
  } else if (diceValues[0].value === diceValues[1].value) {
    document.getElementById(diceValues[0].id).style.backgroundColor = "blue";
    document.getElementById(diceValues[1].id).style.backgroundColor = "blue";
    document.getElementById(diceValues[2].id).style.backgroundColor = "red";
  } else if (diceValues[1].value === diceValues[2].value) {
    document.getElementById(diceValues[0].id).style.backgroundColor = "green";
    document.getElementById(diceValues[1].id).style.backgroundColor = "blue";
    document.getElementById(diceValues[2].id).style.backgroundColor = "blue";
  } else {
    document.getElementById(diceValues[0].id).style.backgroundColor = "green";
    document.getElementById(diceValues[1].id).style.backgroundColor = "yellow";
    document.getElementById(diceValues[2].id).style.backgroundColor = "red";
  }
}
