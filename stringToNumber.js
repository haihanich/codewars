// 8kyu
// Convert a String to a Number! We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

function stringToNumber(str) {
  let num;
  num = +str;
  return num;
}

console.log(stringToNumber("-7"));