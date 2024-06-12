let timerElement = document.getElementById("timer");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let restart = document.getElementById("restart");

let timer;
let isRunning = false;
let secondsElapsed = 0;

function formatTime(number) {
  return number < 10 ? "0" + number : number;
}

function updateTimerDisplay() {
  let minutes = Math.floor(secondsElapsed / 60);
  let seconds = secondsElapsed % 60;
  timerElement.textContent = `${formatTime(minutes)}:${formatTime(seconds)}`;
}

function startTimer() {
  if (!isRunning) {
    timer = setInterval(() => {
      secondsElapsed++;
      updateTimerDisplay();
    }, 1000);
    isRunning = true;
  }
}

function stopTimer() {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
  }
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  secondsElapsed = 0;
  updateTimerDisplay();
}

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
restart.addEventListener("click", resetTimer);

updateTimerDisplay();
