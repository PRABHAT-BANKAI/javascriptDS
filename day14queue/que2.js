
// q2
// Implement Stack using Two Queues
// Description: Implement stack functionality (push and pop) using two queues.
// Key Concept: Ensure the LIFO (Last In, First Out) behavior of a stack by using two queues and rearranging elements during push or pop operations.

let q2 = []; // temporary [10] [] [40,20,10,30] []
let q1 = []; // main [10]  [][] [50,40,20,10,30]


function push(a){
    q2.push(a)
    while(q1.length > 0){
        q2.push(q1.shift())
    }
    [q1,q2] = [q2, q1]
}

function pop(){
   return q1.shift()
}


push(10)
push(20);
push(30);
push(40);
push(50);
console.log(pop())