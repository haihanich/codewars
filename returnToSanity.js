// 7kyu.
// Sum of two lowest positive integers. Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

function sumTwoSmallestNumbers(numbers) {
  let minTwo = 0;
  let min = Math.min(...numbers);
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == min) {
      numbers.splice(i, 1);
    }
  }
  minTwo = Math.min(...numbers);
  return min + minTwo;
}

console.log(sumTwoSmallestNumbers([9, 8, 9, 1]));
