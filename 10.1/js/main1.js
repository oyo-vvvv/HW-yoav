console.log("On commence bientot...");

for (let i = 0; i < 10; i++) {
  var num = parseInt(prompt("enter a number"));
  console.log(i + 1 + ") - " + num);
  if (!num || num < 0) {
    continue;
  }
  var sum = 0;
  while (num != 0) {
    var last = num % 10;
    sum += last;
    num = Math.floor(num / 10);
  }
  console.log("The sum of prompt #" + (i + 1) + " is: " + sum);
  if (sum === 26) {
    console.log("Magic Number FOUND!!!");
    break;
  }
}

console.log("On a terminé");

//   1) - 56
//   The sum of prompt #1 is: 11
//   2) - 5247
//   The sum of prompt #2 is: 18
//   3) - NaN
//   4) - NaN
//   5) - 300
//   The sum of prompt #5 is: 3
