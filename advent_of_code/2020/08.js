const { readFileSync } = require("fs");

const runOps = (ops) => {
  let acc = 0;
  const seen = new Set();
  let idx = 0;

  // Add this for part 2
  let resolved = false;

  while (true) {
    if (!ops[idx]) {
      resolved = true;
      break;
    }

    if (seen.has(idx)) {
      console.log(
        `Oh no, we are about to enter an infinite loop at idx ${idx}!`
      );
      break;
    }

    seen.add(idx);

    let [type, val] = ops[idx].split(" ");
    val = Number(val);

    if (type === "acc") {
      acc += val;
      idx += 1;
    } else if (type === "jmp") {
      idx += val;
    } else if (type === "nop") {
      // Do nothing
      idx += 1;
    }

    // console.log(type, val, idx);
  }

  return { acc, resolved };
};

const test = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`;

const run = () => {
  const f = readFileSync("./advent_of_code/2020/08.txt", "utf8");

  const ops = f.split("\n").filter((x) => x);
  return runOps(ops);
};

// console.time("run");
// console.log("Solution", run());
// console.timeEnd("run");

// ===================================

const runTwo = () => {
  const f = readFileSync("./advent_of_code/2020_08.txt", "utf8");

  const ops = f.split("\n").filter((x) => x);

  // Try to change each nop into a jmp and vice versa, see which one does NOT force an infinite loop.
  for (let i = 0; i < ops.length; i++) {
    const [type, val] = ops[i].split(" ");
    if (type === "acc") continue;

    if (type === "nop") {
      const newOps = [...ops];
      newOps[i] = `jmp ${val}`;
      const { acc, resolved } = runOps(newOps);
      if (resolved) {
        return acc;
      }
    }

    if (type === "jmp") {
      const newOps = [...ops];
      newOps[i] = `nop ${val}`;
      const { acc, resolved } = runOps(newOps);
      if (resolved) {
        return acc;
      }
    }
  }

  //   return ops;
};

console.time("run");
console.log("Solution", runTwo());
console.timeEnd("run");

// Nice! got it
