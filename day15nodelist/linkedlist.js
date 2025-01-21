// JavaScript program to check if 
// linked list is palindrome.

class Node {
  constructor(data) {
      this.data = data;
      this.next = null;
  }
}

// Function to check if the linked list is 
// palindrome or not
function isPalindrome(head) {
  let currNode = head;
  let stack = [];

  // Push all elements of the list to the stack
  while (currNode !== null) {
      stack.push(currNode.data);
      currNode = currNode.next;
  }

  // Iterate in the list again and check by 
  // popping from the stack
  while (head !== null) {
  
      // Get the topmost element
      let c = stack.pop();

      // Check if data is not same as popped element
      if (head.data !== c) {
          return false;
      }

      // Move ahead
      head = head.next;
  }

  return true;
}

// Linked list : 1->2->3->2->1
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(2);
head.next.next.next.next = new Node(1);

let result = isPalindrome(head);

if (result)
  console.log("true");
else
  console.log("false");