//selection sort time  complexity O(n2)

// function selectionSort(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     // Assume the current position holds
//     // the minimum element
//     let min_idx = i;

//     // Iterate through the unsorted portion
//     // to find the actual minimum
//     for (let j = i + 1; j < n; j++) {
//       if (arr[j] < arr[min_idx]) {
//         // Update min_idx if a smaller element is found
//         min_idx = j;
//       }
//     }

//     // Move minimum element to its
//     // correct position
//     let temp = arr[i];
//     arr[i] = arr[min_idx];
//     arr[min_idx] = temp;
//   }
// }

// Driver function
// const arr = [64, 25, 12, 22, 11];

// selectionSort(arr);



// bubble sort
// Optimized javaScript implementation
// of Bubble sort
function bubbleSort(arr, n){
  var i, j, temp;
  var swapped;
  for (i = 0; i < n - 1; i++){
      swapped = false;
      for (j = 0; j < n - i - 1; j++){//6
          if (arr[j] > arr[j + 1]) 
          {
              // Swap arr[j] and arr[j+1]
              temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
              swapped = true;
          }
      }

      // IF no two elements were 
      // swapped by inner loop, then break
      if (swapped == false)
      break;
  }
}


// Driver program
var arr = [ 64, 34, 25, 12, 22, 11, 90 ]; ///[34, 64, 25, 12, 22, 11, 90]//[34, 25, 64, 12, 22, 11, 90]//[34, 25, 12, 64, 22, 11, 90]//[34, 25, 12, 2, 64, 11, 90]//[34, 25, 12, 2, 11, 64, 90]
var n = arr.length;
bubbleSort(arr, n);
console.log(arr)


//[34, 25, 12, 2, 11, 64, 90]
//[25, 34, 12, 2, 11, 64, 90]
//[25, 12, 34, 2, 11, 64, 90]
//[25, 12, 22, 34, 11, 64, 90]
//[25, 12, 22, 11, 34, 64, 90]


//[12, 25, 22, 11, 34, 64, 90]
//[12, 22, 25, 11, 34, 64, 90]
//[12, 22, 11, 25, 34, 64, 90]
//[12, 22, 11, 25, 34, 64, 90]

//[12, 22, 11, 25, 34, 64, 90]


