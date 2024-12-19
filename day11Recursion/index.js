function print(num) {
  console.log(num);
  if (num == 0) {
    return;
  }
  print(num - 1);
}

print(10);

function recurSum(n) {
  if (n <= 1) {
    return n;
  }

  return n + recurSum(n - 1);
}

// Driver code
let n = 5;

console.log(recurSum(n));

// 5 +
// 4
// 3
// 2
// 1

let facNumber = 5;

function fact(n) {
  if (n <= 1) {  // base case
    return n;
  }

  return n * fact(n - 1);
}

console.log(fact(n));
