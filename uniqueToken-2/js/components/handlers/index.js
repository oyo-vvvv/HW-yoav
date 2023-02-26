import { init } from "../register/view.js";
import { init } from "../login/view.js";

var form = init();

form.toggleBtn.addEventListener("click", function () {
  if (form.login.style.display === "block") {
    form.login.style.display = "none";
    form.register.style.display = "block";
    this.innerText = "Already have an account ?";
  } else {
    form.login.style.display = "block";
    form.register.style.display = "none";
    this.innerText = "Don't have an account yet ?";
  }
});
