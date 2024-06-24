// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

// Evaluate the expression. Return an integer that represents the value of the expression.

// Note that:

// The valid operators are '+', '-', '*', and '/'.
// Each operand may be an integer or another expression.
// The division between two integers always truncates toward zero.

// Oh wow.... do we literally just pop off last 2 things from stack, and apply operation, and push result back on??
// Yes!!! Wow that is cool. Wouldn't have thought of that if not for the "stack" category.
const evalRPN = (tokens) => {
  const digit = "0123456789";
  const stack = [];

  let idx = 0;
  while (idx < tokens.length) {
    const token = tokens[idx];
    if (digit.includes(token[0]) || token.length > 1) {
      stack.push(parseInt(token));
    } else {
      const b = stack.pop();
      const a = stack.pop();
      if (token === "+") {
        stack.push(a + b);
      } else if (token === "-") {
        stack.push(a - b);
      } else if (token === "*") {
        stack.push(a * b);
      } else if (token === "/") {
        stack.push(Math.trunc(a / b));
      }
    }
    idx++;
  }
  return stack[0];
};

console.log(evalRPN(["2", "1", "+", "3", "*"])); // 9
console.log(evalRPN(["4", "13", "5", "/", "+"])); // 6
console.log(
  evalRPN(["10", "6", "9", "3", "/", "-11", "*", "/", "*", "17", "+", "5", "+"])
); // 22
