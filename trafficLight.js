// 8kyu
// Thinkful - Logic Drills: Traffic light. You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

const g = "green";
const y = "yellow";
const r = "red";

function trafficLight(color) {
  let res = "";
  switch (color) {
    case "green":
      res = "yellow";
      break;
    case "yellow":
      res = "red";
      break;
    case "red":
      res = "green";
      break;
  }
  return res;
}

console.log(trafficLight(y));
