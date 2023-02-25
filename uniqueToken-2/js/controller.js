import * as Login from "./components/login/controller.js";
import * as Register from "./components/register/controller.js";

var USER = {};

export function init() {
  console.log("init");
  Register.init(USER)
  Login.init(USER);
}
