// Definition of a Node in a singly linked list
class Node {
  constructor(data) {
    // Data part of the node
    this.data = data;
    this.next = null;
  }
}

const NodeData = new Node(1);
NodeData.next = new Node(2);
NodeData.next.next = new Node(3);
console.log(NodeData);

// output
//1
//2
//3


// Javascript Function to traverse and print the elements
// of the linked list

let head = NodeData


traverseLinkedList(head)
function traverseLinkedList(head) {

  // Start from the head of the linked list
  let current = head;

  // Traverse the linked list until reaching the
  // end (null)
  while (current !== null) {
  
      // Print the data of the current node
      console.log(current.data);

      // Move to the next node
      current = current.next;
  }

}