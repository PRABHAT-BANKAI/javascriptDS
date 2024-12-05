// *
// **
// ***
// ****
//     *
//    **
//   ***
//  ****
// *****

let str = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    if (i == j) {
    }
  }
}

let arr = [1, 2, 3, 4, 5];

let arr2 = [5, 6, 7, 8, ...arr];
// Nested if statement
// Min, Max Programs

let array = [-22, -3, -5, -6, -7, -11, -888, -56, ,-9];

// console.log(Math.max(...array));
let max = -Infinity;
for (let i = 0; i < array.length; i++) {
  if (max < array[i]) {
    max = array[i];
  }
}
console.log(max);
