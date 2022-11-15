// Return Negative. In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

const number = -2;

function makeNegative(num) {
  if (num < 0) {
    return num;
  }
  return -num;
}

console.log(makeNegative(number));
