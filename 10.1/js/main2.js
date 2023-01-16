const Cars = ["Honda", "Mazda", "Toyota", "Suzuki", "Yamaha", "Nissan"];

var question = prompt(
  "What is the car you would like to know if I own in my collection"
).toLowerCase();

var result = "non";
for (let i = 0; i < Cars.length; i++) {
  const Car = Cars[i].toLowerCase();
  if(Car === question){
    result = "oui";
    break;
  }
}

alert(result)
