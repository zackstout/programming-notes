const { readFileSync } = require("fs");

// Huh... works differently here than bringing in from text file... interesting
const test = `"\x27"`;

const run = () => {
  const f = readFileSync("./advent_of_code/2015/08.txt", "utf8");

  const lines = f.split("\n").filter((x) => x);

  lines.forEach((line) => {});
  return test;
};

// console.time("run");
// console.log("Solution", run());
// console.timeEnd("run");

console.time("run");
console.log("Solution", run());
console.timeEnd("run");
