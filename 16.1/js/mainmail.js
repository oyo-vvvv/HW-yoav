function mail(newMail, preAt, postAt) {
  var eMail = prompt("Enter your e-mail").toLowerCase();
  var splitMail = eMail.split("@"); // ["yoav.11", "outlook.com"]
  var postAt = splitMail.pop(); // "outlook.com"
  var unDotted2 = postAt.split("."); // ["outlook", "com"]
  var preAt = splitMail.shift(); //
  console.log(preAt); // "yoav.11"

  const gMail = "gmail";
  if (unDotted2.shift() == gMail) {
    unDotted1 = preAt.split("."); // ["yoav", "11"]
    newMail = unDotted1.join(""); // yoav11
    return "Your mail is " + newMail + "@" + postAt;
  } else return "Your mail is " + preAt + "@" + postAt;
}

var yourMail = mail();

alert(yourMail);

// je n'ai pas  reussi a faire en sorte que simplement
// un e-mail soit injecter et rien d'autre
