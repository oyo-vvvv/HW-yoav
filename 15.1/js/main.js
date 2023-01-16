const Students = [];
const Results = [];
const Passed = [];
var avgPassed = 0;
var avgFailed = 0;
var qty = parseInt(prompt("How many student are in the class"))

for (let i = 0; i < qty ; i++) {
  var fName = prompt("Enter the student's name.");
  var note = parseInt(prompt("Enter the student's result."));
  Students.push(fName);
  Results.push(note);
  if (note >= 70) {
    Passed.push(fName);
    avgPassed += note;
    continue;
  }
  avgFailed += note;
}

alert(
  "The student who passed are : " +
    Passed.join(", ") +
    ".\nThe average of their result is : " +
    avgPassed / Passed.length +
    ".\nThe average of the students who failed is : " +
    avgFailed / (qty - Passed.length)
);
