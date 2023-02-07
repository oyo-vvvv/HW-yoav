var btn1 = document.createElement("button");
btn1.innerText = "1\n\n .";
var btn2 = document.createElement("button");
btn2.innerText = "2\n\n A, B, C";
var btn3 = document.createElement("button");
btn3.innerText = "3\n\n D, E, F";
var btn4 = document.createElement("button");
btn4.innerText = "4\n\n G, H, I";
var btn5 = document.createElement("button");
btn5.innerText = "5\n\n J, K, L";
var btn6 = document.createElement("button");
btn6.innerText = "6\n\n M, N, O";
var btn7 = document.createElement("button");
btn7.innerText = "7\n\n P, Q, R, S";
var btn8 = document.createElement("button");
btn8.innerText = "8" + "\n\nT, U, V";
var btn9 = document.createElement("button");
btn9.innerText = "9\n\n W, X, Y, Z";
var btn0 = document.createElement("button");
btn0.innerText = "0\n\n .";

document
  .getElementById("table")
  .append(btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn0);

document.getElementById("main").append(document.getElementById("table"))

// btn1.addEventListener("click", function ()