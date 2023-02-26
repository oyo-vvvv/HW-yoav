// import { HTML } from "./html.js";

// HTML.login.btn.addEventListener("click", function () {
//   // go get the user from local storage
//   var user = localStorage.user;
//   if (user) {
//     // get the values from the login form
//     var x = HTML.login;
//     user = JSON.parse(user);
//     if (user.email == x.email.value && user.password == x.password.value) {
//       HTML.sections.authPage.remove();

//       delete HTML.sections.authPage;
//       delete HTML.register;
//       delete HTML.login;
//       delete HTML.toggleBtn;

//       HTML.sections.homePage.style.display = "block";
//       HTML.sections.homePage.innerHTML = `<h1>Welcome, ${user.fName}</h1>`;
//       return;
//     }
//   }
//   alert("Wrong credentials!");
// });