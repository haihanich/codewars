// 8kyu
// Grasshopper - Summation. Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

function summation(num) {
  let sum = 0;
  do {
    sum += num;
  } while ((num -= 1) > 0);
  return sum;
}

console.log(summation(8));
