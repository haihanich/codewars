// 8kyu
// Even or Odd. Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(integer) {
  if (integer % 2 === 0) {
    return "Even";
  }
  return "Odd";
}

console.log(evenOrOdd(3));
