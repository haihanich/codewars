// 8kyu
// String repeat. Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

function stringRepeat(n, s) {
  let res = "";
  do {
    res += s;
  } while ((n -= 1) > 0);
  return res;
}

console.log(stringRepeat(5, "Hello"));
