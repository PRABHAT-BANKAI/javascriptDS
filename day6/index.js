// Array operations (inserting, Deleting, Updating)
// Linear search
// Modifying array elements
// Concatenating arrays

let array = [10, 20, 50, 30, 40];
//push
//shift
//unshift
//pop

array[3] = 333; // array is mutable

console.log(array);

let string = "javascript"; // string is immutable
string[3] = "asdf";
console.log(string);

let array2 = [10, 20, 50, 30, 40, 12, 56, 75, 25, 10];

// array2.splice(2,3,"hello","javscript")//
console.log(array2);
const string2 = "javascript"
const arraySlice = array2.slice(1,4)
console.log(arraySlice);

const stringSlice = string2.slice(1,4)
console.log(stringSlice)


let tempArray = [1,2,3]
let tempArray2 = [4,5,6]

// output [1,2,3,4,5,6]
let result =[...tempArray,...tempArray2]
console.log(result)

let result2 = tempArray.concat(tempArray2)
console.log(result2)


//linear search

let data = ["react","javascript","html","css","c++","angular","nodejs","tailwindCSS"]


for(let i=0;i<data.length;i++){
  if(data[i]==="c++"){
    console.log(`found value ${data[i]}`)
    break
  }
}


