https://www.yad2.co.il/vehicles/motorcycles?manufacturer=243,116,285,110&year=2018-2023&price=50000-150000&hand=-1-2&license=4

const obj = {};

var query = prompt("Enter a URL").split("?")[1]; // "manufacturer=..."
var props = query.split("&"); // ["manufacturer=243,116,285,110","year=2018-2023"]

for (let i = 0; i < props.length; i++) {
  const elem = props[i].split("="); // ["manufacturer","243,116,285,110"]
  var key = elem[0];
  var val = elem[1];

  if (val.includes(",")) {
    val = val.split(",");
  }

  obj[key] = val;
}

console.log(obj);