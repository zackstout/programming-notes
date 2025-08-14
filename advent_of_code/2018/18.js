const { readFileSync } = require("fs");

// Huh... works differently here than bringing in from text file... interesting
const test = `.#.#...|#.
.....#|##|
.|..|...#.
..|#.....#
#.#|||#|#|
...#.||...
.|....|...
||...#|.#|
|.||||..|.
...#.|..|.
`;

function getScore(stateKey) {
  let lumber = 0;
  let tree = 0;
  for (const char of stateKey) {
    if (char === "|") tree++;
    if (char === "#") lumber++;
  }
  return lumber * tree;
}

// Accepts array of strings, returns array of strings
function advance(state) {
  const newState = [...state.map((line) => line.split(""))];

  for (let r = 0; r < state.length; r++) {
    const row = state[r];
    for (let c = 0; c < row.length; c++) {
      const char = row[c];
      //   console.log(char);

      const neighbors = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1],
      ]
        .map(([dx, dy]) => {
          return [dx + c, dy + r];
        })
        .filter(([cc, rr]) => {
          return rr >= 0 && cc >= 0 && rr < state.length && cc < row.length;
        })
        // Ahhh nice we just got this backward, cool beans
        .map(([cc, rr]) => {
          return state[rr][cc];
        });

      const counts = {};

      for (const n of neighbors) {
        counts[n] = (counts[n] ?? 0) + 1;
      }

      //   if (r == 0 && c == 1) console.log("counts", r, c, counts);

      let newChar = char;

      // Open can become tree
      if (char === ".") {
        if (counts["|"] >= 3) newChar = "|";
      }
      // Lumberyard can remain or expire
      if (char === "#") {
        if (!(counts["#"] >= 1 && counts["|"] >= 1)) newChar = ".";
      }
      // Tree can become lumberyard
      if (char === "|") {
        if (counts["#"] >= 3) newChar = "#";
      }

      newState[r][c] = newChar;

      //   console.log(counts);
      //   console.log("ngihbors", neighbors);
    }
  }

  return newState.map((line) => line.join(""));
}

const run = () => {
  const f = readFileSync("./advent_of_code/2018/18.txt", "utf8");

  const lines = f
    .split("\n")
    .filter((x) => x)
    .map((x) => x.trim());

  const seenStates = new Map();
  const stateKey = lines.join(";");
  seenStates.set(stateKey, { score: getScore(stateKey), times: 0 });

  let state = lines;

  //   state.forEach((line) => {
  //     console.log(line);
  //   });

  let times = 0;

  while (times < 100000) {
    state = advance(state);

    const stateKey = state.join(";");

    // if (times % 479 === 0 && times > 0) {
    //   console.log(stateKey);
    //   console.log("========");
    // }

    // THIS WAS THE IMPORTANT PART BUT WE NO LONGER NEED IT:
    // KICK AWAY THE LADDER!

    if (seenStates.get(stateKey)) {
      //   console.log(`Looped after ${times} times.`);
      //   console.log(seenStates.get(stateKey));
      //   console.log(stateKey.slice(0, 20));
      //   console.log(times - seenStates.get(stateKey).times);
      //   break;
    }

    // 451 is start
    // 28 is loop size? yea i guess so!
    // So it starts at "3".
    if (times > 450 && times % 28 === 3) {
      console.log("Got one??", stateKey.slice(0, 20));
    }

    // And 1000000000 % 28 = 20....
    // Which is 17 after the start.

    // so we should need the history at... 451+17 = 468...

    // Nuts 189980 is too low...

    // could be 467 instead of 468... 195290...
    // YES!!! THAT IS IT!
    if (times === 467) {
      return getScore(stateKey);
    }

    seenStates.set(stateKey, { score: getScore(stateKey), times });

    times++;

    // console.log("================================");
    // state.forEach((line) => {
    //   console.log(line);
    // });

    // console.log(`Score after ${times} runs is ${getScore(state.join(";"))}`);
    // console.log("================================");
  }

  console.log("ret");
  return seenStates.get(stateKey);

  return getScore(state.join(";"));

  //   return getScore(lines.join(";"));

  //   return lines.map((l) => l.length);
};

// console.time("run");
// console.log("Solution", run());
// console.timeEnd("run");

console.time("run");
console.log("Solution", run());
console.timeEnd("run");

// Oh... weird.... .does the toy example NOT have a stable loop?? Curveball!

// heck yeah we got there!!
