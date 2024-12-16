// merge sort
// quick sort

let string = "12345";

for (let i = 0; i < string.length; i++) {

  for (let j = i; j < string.length; j++) {
    let str = "";
    for (let k = i; k <= j; k++) {
      str += string[k];
    }
    console.log(str);
  }

}

// 1;
// 12;
// 123;
// 1234;
// 12345;

// 2;
// 23;
// 234;
// 2345;

// 3;
// 34;
// 345;

// 4;
// 45;

// 5;



let array = [12,53,2,6,34,1,55]   //question