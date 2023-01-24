//rendre lettre decide par un prompt en majuscule dans tt le texte
// typeof ?
//
var text =
  "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
alert(text);
var letter = prompt("Peek a letter that u want to uppCase in the text").toLocaleLowerCase(); // a
//var p = document.querySelector("p");

var letterUp = letter.toLocaleUpperCase();
var text = text.replaceAll(letter, letterUp);
alert(text);

