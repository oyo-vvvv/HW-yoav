while (!num) {
  var num = parseInt(prompt("Enter a real number please"));
}
var dash = "";
var rev = "";
if (num < 0) {
  dash = "-";
  num = -num;
}
while (num != 0) {
  var temp = num % 10;
  rev += temp;
  num = Math.trunc(num / 10);
}

alert(rev + dash);
