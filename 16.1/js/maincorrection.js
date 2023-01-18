function fixEmail(address) {
  address = address.toLocaleLowerCase().replaceAll(" ", "");
  if (address.includes("gmail.com")) {
    var arr = address.split("@");
    address = arr[0].replaceAll(".", "") + "@gmail.com";
  }
  return address;
}

alert(fixEmail(prompt("Enter your Email")))
