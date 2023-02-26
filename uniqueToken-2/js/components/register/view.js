import { MyButton } from "../../HTMLElements/button.js";
import { MyInput } from "../../HTMLElements/input.js";
import { MySection } from "../../HTMLElements/section.js";

function init() {
  var form = {};
  var Home = new MySection("home-page", "views");
  form.fName = new MyInput("", "login-form", "fName", "First Name");
  form.lName = new MyInput("", "login-form", "lName", "Last Name");
  form.email = new MyInput(
    "",
    "login-form",
    "email",
    "Please enter your email"
  );
  form.password = new MyInput("", "", "password", "Please enter your password");

  form.register = new MyButton("", "", "Register Now", function () {
    console.log("registered");
  });

  form.toggleBtn = document.createElement("button");
  form.toggleBtn.innerText = "Already have an account ?";
  
  Home.append(form.fName, form.lName, form.email, form.password, form.register, form.toggleBtn);
  document.getElementById("main").append(Home);

  return form;
}

export { init };
