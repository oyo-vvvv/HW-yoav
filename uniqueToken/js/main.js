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
  console.log(token);
  //   console.log('la taille du token est de ' + token.length + 'characters')
}

uniqueToken();

class Row {
  constructor(_id, _class, _style, _cols) {
    this.row = document.createElement("div");
    this.row.className = "row ";
    if (_id) this.row.id = _id;
    if (_class) this.row.className += _class;
    if (_style) this.row.style = _style;
    _cols.forEach((x) => {
      this.row.append(x.col);
    });
  }
}

class Col {
  constructor(_id, _class) {
    this.col = document.createElement("div");
    this.col.className = "col ";
    if (_id) this.col.id = _id;
    if (_class) this.col.className += _class;
  }
}

class Input {
  constructor(_id, _class, _label, _type, _placeholder = "") {
    this.div = document.createElement("div");
    this.div.className = "input-field col";
    if (_class) this.div.className += " " + _class;
    this.input = document.createElement("input");
    this.input.id = _id;
    this.input.type = _type;
    this.input.placeholder = _placeholder;
    this.label = document.createElement("label");
    this.label.setAttribute("for", _id);
    this.label.innerText = _label;
    this.div.append(this.input, this.label);
  }
}
class Button {
  constructor(_id, _class, _icon, _text) {
    this.btn = document.createElement("a");
    this.btn.className = "waves-effect waves-light btn ";
    if (_id) this.btn.id = _id;
    if (_class) this.btn.className += " " + _class;
    if (_icon) {
      this.i = document.createElement("i");
      this.i.className = "material-icons left";
      this.i.innerText = _icon;
      this.btn.append(this.i);
    }
    this.span = document.createElement("span");
    this.span.innerText = _text;
    this.btn.append(this.span);
  }
}

var colArr = [];
colArr.push(new Col("", "s4"));
colArr.push(new Col("", "s4"));
colArr.push(new Col("", "s4"));

var sectionLogin = new Row("", "", "margin-top: 50px;", colArr);
document.getElementById("main").append(sectionLogin.row);

var nameInput = new Input(
  "name-input",
  "s6",
  "Your Name",
  "text",
  "ex : John Smith"
);
var emailInput = new Input(
  "email-input",
  "s  6",
  "Your Email",
  "email",
  "ex: your-email@email.com"
);
var passInput = new Input(
  "pass-input",
  "s12",
  "Your Password",
  "password",
  "ex: 123Soleil!LoveMeirAndJs"
);
var loginBtn = new Button("login-btn", "col s12", "check", "Register");

colArr[1].col.append(
  nameInput.div,
  emailInput.div,
  passInput.div,
  loginBtn.btn
);

var register = document.getElementById("login-btn");
var inputNameForm = document.getElementById("name-input");
var inputMailForm = document.getElementById("email-input");
var inputPasswordForm = document.getElementById("pass-input");

register.addEventListener("click", () => {
    if (localStorage.getItem("user1") == null) {
        inputNameForm = inputNameForm.value.toString().toLowerCase();
        inputMailForm = inputMailForm.value.toString().toLowerCase();
        inputPasswordForm = inputPasswordForm.value.toString().toLowerCase();
        var value = [
          {
            nom: inputNameForm,
            mail: inputMailForm,
            tokenUser: token,
            password: inputPasswordForm,
          },
        ];
        var valuepars = JSON.stringify(value);
      
        if (
          inputNameForm === "" ||
          inputMailForm === "" ||
          inputPasswordForm === ""
        ) {
          // alert("Veuillez remplire vos informations")
          M.toast({
            html: "Veuillez remplire vos informations!",
            classes: "rounded",
          });
        } else {
          localStorage.setItem("user1", valuepars);
          var toastHTML =
            '<span>Vous êtes enregistrer</span><button class="btn-flat toast-action" id="okay" onclick="okay()">Ok !</button>';
          M.toast({ html: toastHTML });
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }
    } else if(localStorage.getItem("user2") == null) {
        inputNameForm = inputNameForm.value.toString().toLowerCase();
        inputMailForm = inputMailForm.value.toString().toLowerCase();
        inputPasswordForm = inputPasswordForm.value.toString().toLowerCase();
        var value = [
          {
            nom: inputNameForm,
            mail: inputMailForm,
            tokenUser: token,
            password: inputPasswordForm,
          },
        ];
        var valuepars = JSON.stringify(value);
      
        if (
          inputNameForm === "" ||
          inputMailForm === "" ||
          inputPasswordForm === ""
        ) {
          // alert("Veuillez remplire vos informations")
          M.toast({
            html: "Veuillez remplire vos informations!",
            classes: "rounded",
          });
        } else {
          localStorage.setItem("user2", valuepars);
          var toastHTML =
            '<span>Vous êtes enregistrer</span><button class="btn-flat toast-action" id="okay" onclick="okay()">Ok !</button>';
          M.toast({ html: toastHTML });
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }
    } else if(localStorage.getItem("user3") == null) {
        inputNameForm = inputNameForm.value.toString().toLowerCase();
        inputMailForm = inputMailForm.value.toString().toLowerCase();
        inputPasswordForm = inputPasswordForm.value.toString().toLowerCase();
        var value = [
          {
            nom: inputNameForm,
            mail: inputMailForm,
            tokenUser: token,
            password: inputPasswordForm,
          },
        ];
        var valuepars = JSON.stringify(value);
      
        if (
          inputNameForm === "" ||
          inputMailForm === "" ||
          inputPasswordForm === ""
        ) {
          // alert("Veuillez remplire vos informations")
          M.toast({
            html: "Veuillez remplire vos informations!",
            classes: "rounded",
          });
        } else {
          localStorage.setItem("user3", valuepars);
          var toastHTML =
            '<span>Vous êtes enregistrer</span><button class="btn-flat toast-action" id="okay" onclick="okay()">Ok !</button>';
          M.toast({ html: toastHTML });
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }
    } else if(localStorage.getItem("user4") == null) {
        inputNameForm = inputNameForm.value.toString().toLowerCase();
        inputMailForm = inputMailForm.value.toString().toLowerCase();
        inputPasswordForm = inputPasswordForm.value.toString().toLowerCase();
        var value = [
          {
            nom: inputNameForm,
            mail: inputMailForm,
            tokenUser: token,
            password: inputPasswordForm,
          },
        ];
        var valuepars = JSON.stringify(value);
      
        if (
          inputNameForm === "" ||
          inputMailForm === "" ||
          inputPasswordForm === ""
        ) {
          // alert("Veuillez remplire vos informations")
          M.toast({
            html: "Veuillez remplire vos informations!",
            classes: "rounded",
          });
        } else {
          localStorage.setItem("user4", valuepars);
          var toastHTML =
            '<span>Vous êtes enregistrer</span><button class="btn-flat toast-action" id="okay" onclick="okay()">Ok !</button>';
          M.toast({ html: toastHTML });
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }
    } else {
        inputNameForm = inputNameForm.value.toString().toLowerCase();
        inputMailForm = inputMailForm.value.toString().toLowerCase();
        inputPasswordForm = inputPasswordForm.value.toString().toLowerCase();
        var value = [
          {
            nom: inputNameForm,
            mail: inputMailForm,
            tokenUser: token,
            password: inputPasswordForm,
          },
        ];
        var valuepars = JSON.stringify(value);
      
        if (
          inputNameForm === "" ||
          inputMailForm === "" ||
          inputPasswordForm === ""
        ) {
          // alert("Veuillez remplire vos informations")
          M.toast({
            html: "Veuillez remplire vos informations!",
            classes: "rounded",
          });
        } else {
          localStorage.setItem("user5", valuepars);
          var toastHTML =
            '<span>Vous êtes enregistrer</span><button class="btn-flat toast-action" id="okay" onclick="okay()">Ok !</button>';
          M.toast({ html: toastHTML });
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }
    }
 
});

function okay() {
  window.location.reload();
}

// const user = JSON.parse(localStorage.getItem("user"));
// if (!user) {
//   const newUser = { username: document.getElementById("name-input").value, token };
//   localStorage.setItem("user", JSON.stringify(newUser));
// } else {
//   user.token = token;
//   localStorage.setItem("user", JSON.stringify(user));
// }

var usersArray = JSON.parse(localStorage.getItem("user1"));
console.log(usersArray[0].tokenUser);
var newToken = token;
usersArray[0].tokenUser = newToken;
localStorage.setItem("user1", JSON.stringify(usersArray));
