// 8kyu
// Cat years, Dog years. Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

function years(humanYears) {
  let arr = [humanYears];
  if (humanYears == 1) {
    arr[0] = 1;
    arr[1] = 15;
    arr[2] = 15;
  } else if (humanYears == 2) {
    arr[0] = 2;
    arr[1] = 24;
    arr[2] = 24;
  } else if (humanYears > 2) {
    arr[0] = humanYears;
    arr[1] = 24 + (humanYears - 2) * 4;
    arr[2] = 24 + (humanYears - 2) * 5;
  }
  return arr;
}

console.log(years(1));
