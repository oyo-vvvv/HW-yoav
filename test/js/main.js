alert("If you press 'OK', you'll have 3minutes to found the code or the bomb will BOUMBOUM")

const timer = document.getElementById("timer");



var display = document.createElement("p");
display.innerText = "03:01";
document.getElementById("main").append(display)

function startTimer() {
  var timeLeft = 3 * 60;
  var minutes, seconds;
  var interval = setInterval(function () {
    minutes = parseInt(timeLeft / 60);
    seconds = parseInt(timeLeft % 60);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.innerHTML = minutes + ":" + seconds;

    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(interval);
      disableButtons();
      display.innerHTML = "Time is up";
    }
  }, 1000);
}

startTimer();

const buttons = [
  { number: "1" },
  { number: "2" },
  { number: "3" },
  { number: "4" },
  { number: "5" },
  { number: "6" },
  { number: "7" },
  { number: "8" },
  { number: "9" },
  { number: "*" },
  { number: "0" },
  { number: "#" },
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

buttons.forEach(function ({ number }) {
  const btn = document.createElement("button");
  btn.innerText = number;
  btn.addEventListener("click", function () {
    clearTimeout(timeout);
    clearInterval(interval);
    btn.style.backgroundColor = "yellow";
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
    }
  }
  reset();
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

// function stopTimer() {
//   clearInterval(interval);
// }