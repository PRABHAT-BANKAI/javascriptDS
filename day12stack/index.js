let array = "123456"
array = array.split("")
console.log(array)

// output [6,5,4,3,2,1] 
// parentheses [](){}

let stack = [];

while (array.length - 1 >= 0) {
  stack.push(array.pop());
}
console.log(stack);