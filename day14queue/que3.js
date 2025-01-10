// q3
// Implement Queue using Two Stacks
// Description: Implement queue functionality (enqueue and dequeue) using two stacks.
// Key Concept: Use two stacks to achieve FIFO (First In, First Out) behavior by transferring elements between stacks during dequeue operations.

let s1 = []; // Stack used for enqueue operations [10,20,30,40,50]
let s2 = []; // Stack used for dequeue operations

// Function to add an element to the queue
function enqueue(element) {
  //[60]
  s1.push(element); // Push element onto stack s1
}

// Function to remove an element from the queue
function dequeue() {
  // If both stacks are empty, queue is empty
  if (s1.length === 0 && s2.length === 0) {
    console.log("Queue is empty!");
    return null;
  }

  // If s2 is empty, move all elements from s1 to s2
  if (s2.length === 0) {
    // s2[60]
    while (s1.length > 0) {
      s2.push(s1.pop());
    }
  }

  // Return the top element from s2
  return s2.pop();
}

// Test the queue
enqueue(10);
enqueue(20);
enqueue(30);
enqueue(40);
enqueue(50);

console.log(dequeue()); // 10
console.log(dequeue()); // 20
enqueue(60);
console.log(dequeue()); // 30
console.log(dequeue()); // 40
console.log(dequeue()); // 50
console.log(dequeue()); // 60
console.log(dequeue()); // Queue is empty!

// Input: arr[] = {2, 3, -8, 7, -1, 2, 3}
// Output: 11
// Explanation: The subarray {7, -1, 2, 3} has the largest sum 11.

// if(largetesSum < sum){
//   largestesSum = sum;
// }
// 2
// 23
// 23-8
// 2 3-8+7
// 2 3-8+7-1
// 2 3-8+7-1+2
// 2 3-8+7-1+2-3

// 3
// 3-8
// 3-8+7
// 3-8+7-1
// 3-8+7-1+2
// 3-8+7-1+2-3
// -8
// -8+7
// -8+7-1
// -8+7-1+2
// -8+7-1+2+3

// +7
// +7-1
// +7-1+2
// +7-1+2-3

// -1
// -1+2
// -1+2-3
// +2
// +2-3

// -3

function maxSubarraySum(arr) {
  let res = arr[0];
  let result = "";
  // Outer loop for starting point of subarray
  for (let i = 0; i < arr.length; i++) {
    let currSum = 0;
    let substring = "";
    // Inner loop for ending point of subarray
    for (let j = i; j < arr.length; j++) {
      currSum = currSum + arr[j];
      substring += arr[j] + " ";
      // Update res if currSum is greater than res
      res = Math.max(res, currSum);
console.log(substring)
    }
  }
  return res;
}

const arr = [2, 3, -8, 7, -1, 2, 3];
console.log(maxSubarraySum(arr));
