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

const table = document.getElementById("table");

buttons.forEach(function ({ number, letters }) {
  const btn = document.createElement("button");
  btn.innerText = number + "\n\n" + letters;
  btn.addEventListener("click", function () {
    clearTimeout(timeout);
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

function verifyCode() {
  if (typedCode === code) {
    alert("OPEN !!!");
  } else {
    tries--;
    if (tries === 0) {
      alert("You locked your phone");
    } else {
      alert(tries + " tries left");
    }
  }
  reset();
}

function reset() {
  typedCode = "";
  document.querySelectorAll("button").forEach(function (btn) {
    btn.style.backgroundColor = "";
  });
}
