var token = "";
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const timeNow = Date.now().toString();
const randomNumber = Math.floor(Math.random() * 3) + 6;
const randomNumber2 = Math.floor(Math.random() * 3) + 6;
// localStorage.clear(); // a supprimer plus tard

function uniqueToken() {
  for (let index = 0; index < randomNumber; index++) {
    token += timeNow.charAt(Math.floor(Math.random() * timeNow.length));
  }
  for (let index = 0; index < randomNumber2; index++) {
    token += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
  }

  function getRandomInt(n) {
    return Math.floor(Math.random() * n);
  }
  function shuffle(token) {
    var arr = token.split(""); // Convert String to array
    var n = arr.length; // Length of the array

    for (var i = 0; i < n - 1; ++i) {
      var j = getRandomInt(n); // Get random of [0, n-1]

      var temp = arr[i]; // Swap arr[i] and arr[j]
      arr[i] = arr[j];
      arr[j] = temp;
    }

    token = arr.join(""); // Convert Array to string
    return token; // Return shuffled string
  }
  token = shuffle(token);
  return token;
}

uniqueToken();

export {uniqueToken}