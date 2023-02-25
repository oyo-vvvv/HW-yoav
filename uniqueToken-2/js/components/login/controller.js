import * as View from "./view.js";
import * as Model from "./model.js";

export function init(U) {
  console.log("i init the login component");
  var form = View.init();
  form.login.addEventListener("click", function () {
    U.email = form.email.value;
    U.password = form.password.value;
    Model.updateLS(U);
  });
}
