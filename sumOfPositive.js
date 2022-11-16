// 8kyu
// Sum of positive. You get an array of numbers, return the sum of all of the positives ones.

const array = [1, -4, 7, 12];

function sumOfPositive(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      sum += arr[i];
    } else {
      sum += 0;
    }
  }
  return sum;
}

console.log(sumOfPositive(array));
