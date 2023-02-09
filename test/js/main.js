const timer = document.getElementById("timer");

function startTimer() {
  var timeLeft = 3 * 60;
  var minutes, seconds;
  var interval = setInterval(function () {
    minutes = parseInt(timeLeft / 60);
    seconds = parseInt(timeLeft % 60);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timer.innerHTML = minutes + ":" + seconds;

    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(interval);
      disableButtons();
      timer.innerHTML = "Time is up";
    }
  }, 1000);
}

startTimer();

const buttons = [
  { number: "1", letters: "." },
  { number: "2", letters: "A, B, C" },
  { number: "3", letters: "D, E, F" },
  { number: "4", letters: "G, H, I" },
  { number: "5", letters: "J, K, L" },
  { number: "6", letters: "M, N, O" },
  { number: "7", letters: "P, Q, R, S" },
  { number: "8", letters: "T, U, V" },
  { number: "9", letters: "W, X, Y, Z" },
  { number: "0", letters: "." },
];

const code = "1706";
var typedCode = "";
var tries = 3;
var timeout;
var count = 180;
var interval;

const table = document.getElementById("table");
const timerDisplay = document.createElement("div");
timerDisplay.style.fontSize = "24px";
timerDisplay.style.margin = "10px 0";

buttons.forEach(function ({ number, letters }) {
  const btn = document.createElement("button");
  btn.innerText = number + "\n\n" + letters;
  btn.addEventListener("click", function () {
    clearTimeout(timeout);
    clearInterval(interval);
    btn.style.backgroundColor = "aqua";
    typedCode += number;
    
    timeout = setTimeout(reset, 3000);
    if (typedCode.length === 4) {
      verifyCode();
    }
  });
  table.append(btn);
});

document.getElementById("main").append(table);
document.getElementById("main").append(timerDisplay);

function verifyCode() {
  if (typedCode === code) {
    alert("OPEN !!!");
  } else {
    tries--;
    if (tries === 0) {
      disableButtons();
    } 
    }reset();
  }
  

function reset() {
  clearInterval(interval);
  count = 180;
  typedCode = "";
  document.querySelectorAll("button").forEach(function (btn) {
    btn.style.backgroundColor = "";
  });
}

function disableButtons() {
  document.querySelectorAll("button").forEach(function (btn) {
    btn.setAttribute("disabled", true);
  });
}