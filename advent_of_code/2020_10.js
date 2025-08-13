const { readFileSync } = require("fs");

// Ok... smells like backtracking...
// Wait... but we only need the...sorted list? Right? We have to use every adaptter..?
// At least for part one..

// Ok yes part 2 is how many ways can they be arranged. NOT having to use them all.
// Very similar to basic DP of count ways to get up stairs, if you can move 1 or 2 steps at a time.

const test = `16
10
15
5
1
11
7
19
6
12
4`;

const run = () => {
  const f = readFileSync("./advent_of_code/2020_10.txt", "utf8");
  const vals = f.split("\n").map(Number);
  vals.sort((a, b) => a - b);

  let prev = vals[0];
  const diffs = { 1: 0, 3: 0 };
  for (let i = 1; i < vals.length; i++) {
    const v = vals[i];
    const diff = v - prev;
    // This is an annoying thing that defaultdict in python takes care of
    if (!diffs[diff]) diffs[diff] = 0;
    diffs[diff] += 1;
    prev = v;
  }
  return (diffs[1] + 1) * (diffs[3] + 1);
};

// console.time("run");
// console.log("Solution:", run());
// console.timeEnd("run");

// ==============================

const runTwo = () => {
  const f = readFileSync("./advent_of_code/2020_10.txt", "utf8");
  const vals = f.split("\n").map(Number);
  //   vals.sort((a, b) => a - b);

  const max = Math.max(...vals);
  const valsSet = new Set(vals);

  // There is 1 way to get to 0
  const dp = [1];

  for (let i = 1; i <= max; i++) {
    // console.log(i, valsSet.has(i));
    if (!valsSet.has(i)) {
      // There's no way to get here; i.e. we lack this adapter piece
      dp[i] = 0;
    } else {
      // We can get here: let us count the ways
      const sum = (dp[i - 1] ?? 0) + (dp[i - 2] ?? 0) + (dp[i - 3] ?? 0);
      dp[i] = sum;
    }
  }

  return dp.at(-1);
};

console.time("run");
console.log("Solution:", runTwo());
console.timeEnd("run");

// Ho, hell yeah! That was it!
