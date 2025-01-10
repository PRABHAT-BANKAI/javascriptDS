// ques 1
// Q1: Reverse a Queue using Stack
// Description: Reverse the order of elements in a queue using an auxiliary stack.
// Key Concept: Use a stack to temporarily store elements popped from the queue, and then push them back into a new queue.

let queue = []

function enqueue(q,a){
   q.push(a)
}

function dequeue(){
   return queue.shift()
}

function front(){
    return queue[0]
}

function rear(){
    return queue[queue.length - 1]
}


function reverseQueue(){
     let stack = [];
     let ansQueue = [];
     while(queue.length){
        let a = dequeue()
         stack.push(a)
     }
     while(stack.length){
        enqueue(ansQueue,stack.pop())
     }
     console.log(ansQueue)
}
enqueue(10)//[10,20,30,40,50]
enqueue(20)
enqueue(30)
enqueue(40)
enqueue(50)

reverseQueue()