// I've done this before but want to do again

// Ex: (1 + 2) * 3 would be 1 2 + 3 * in postfix notation

// Ex: "2 12 + 7 /" => 2

function rvp(str) {
  const vals = str.split(" ");
  const ops = {
    "*": (x, y) => x * y,
    "/": (x, y) => x / y,
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
  };

  const stack = [];

  while (vals.length > 0) {
    const val = vals.shift();
    if (ops[val] !== undefined) {
      // Operation
      const v1 = stack.pop();
      const v2 = stack.pop();
      const result = ops[val](v2, v1);
      stack.push(result);
    } else {
      stack.push(Number(val));
    }
  }

  if (stack.length !== 1) {
    throw new Error("Something went wrong");
  }
  return stack[0];
}

console.log(rvp("2 12 + 7 /"));
console.log(rvp("5 1 2 + 4 * + 3 -"));
console.log(rvp("4 2 5 + - 7 /"));

// Nice!
