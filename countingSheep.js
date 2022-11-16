// 8kyu
// Counting Sheep. Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

const array = [true, true, false, true, undefined, null, true, 1, "true"];
let count = 0;

function countSheeps(arrayOfSheep) {
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      count += 1;
    }
  }
  return count;
}

console.log(countSheeps(array));

// function countSheeps(arrayOfSheep) {
//     const present = arrayOfSheep.filter(sheep => sheep);
//     return present.length;
//   }
