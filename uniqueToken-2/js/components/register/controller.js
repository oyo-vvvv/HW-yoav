import * as View from "./view.js";
import * as Model from "./model.js";
import { uniqueToken } from "./token.js";



export function init(U) {
    console.log("i init the register component");
    var form = View.init();
    form.register.addEventListener("click", function () {
    
      U.fName = form.fName.value;
      U.lName = form.lName.value;  
      U.email = form.email.value;
      U.password = form.password.value;
      U.token = uniqueToken()
      Model.updateLS(U);
    });
  }
  