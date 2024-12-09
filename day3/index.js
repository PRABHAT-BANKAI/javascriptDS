let arr = [2, 8, 5, 6];

let greaterValue = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 7) {
    greaterValue = arr[i];
  }
}

console.log(greaterValue);

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// 1 2 3
// 4 5 6
// 7 8 9

//time complexity O(n2)
for(let i=0;i<matrix.length;i++) {
  let str = ""
  for(let j=0;j<matrix[i].length;j++) {
   str += matrix[i][j] +" "
  }
  console.log(str)
}




