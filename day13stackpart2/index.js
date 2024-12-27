// Balanced parenthesis  ()[]{} //example [( {()}) ]

function ispar(s) {
  let stk = [];// [
  for (let i = 0; i < s.length; i++) {//3
      if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
          stk.push(s[i]);
      } else {
          if (stk.length > 0 &&((stk[stk.length - 1] === '(' && s[i] === ')') ||(stk[stk.length - 1] === '{' && s[i] === '}') ||(stk[stk.length - 1] === '[' && s[i] === ']'))) {
              stk.pop(); // Pop the matching opening bracket
          } else {
              return false; // Unmatched closing bracket
          }
      }
  }

  return stk.length === 0;
}

let s = "{()}[";
console.log(ispar(s) ? "true" : "false");

//reverse