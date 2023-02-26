import { MyButton } from "../../HTMLElements/button.js";
import { MyInput } from "../../HTMLElements/input.js";
import { MySection } from "../../HTMLElements/section.js";
import CSS from "./style.css" assert { type: "css" };
document.adoptedStyleSheets.push(CSS)



function init() {
  var form = {};
  var Home = new MySection("home-page", "views");
  form.email = new MyInput("", "login-form", "email", "Please enter your email");
  form.password = new MyInput("", "", "password", "Please enter your password");

  form.login = new MyButton("", "", "Login Please", function () {
    alert(email.value + "\n" + password.value);
  });
  form.toggleBtn = document.createElement("button");
  form.toggleBtn.innerText = "Don't have an account yet ?";

  Home.append(form.email, form.password, form.login, form.toggleBtn);
  document.getElementById("main").append(Home);
  return form;
}

export { init };
