import { AuthTools } from "../handlers/authtools.js";

AuthTools




export function updateLS(U){
    localStorage.user = JSON.stringify(U);

}