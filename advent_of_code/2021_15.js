const { readFileSync } = require("fs");
const { Heap } = require("heap-js");

const test = `1163751742
1381373672
2136511328
3694931569
7463417111
1319128137
1359912421
3125421639
1293138521
2311944581`;

const run = (partTwo = false) => {
  const f = readFileSync("./advent_of_code/2021_15.txt", "utf8");
  const vals = f.split("\n").map((line) => line.split("").map(Number));

  const frontier = new Heap((a, b) => a.cost - b.cost);
  frontier.init([{ cost: 0, x: 0, y: 0 }]);

  let TOTAL_R = vals[0].length;
  let TOTAL_C = vals.length;

  if (partTwo) {
    TOTAL_R *= 5;
    TOTAL_C *= 5;
  }

  const costs = new Map();
  costs.set("0,0", 0);

  while (true) {
    const { x, y, cost } = frontier.pop();
    costs.set(`${x},${y}`, cost);
    if (x === TOTAL_R - 1 && y === TOTAL_C - 1) {
      console.log("Found answer!");
      return cost;
    }
    const ds = [
      [1, 0],
      [0, 1],
      [0, -1],
      [-1, 0],
    ];
    ds.forEach(([dx, dy]) => {
      const x2 = x + dx;
      const y2 = y + dy;
      if (x2 < 0 || y2 < 0 || x2 >= TOTAL_R || y2 >= TOTAL_C) {
        return;
      }
      const currCost = costs.get(`${x2},${y2}`) ?? Infinity;

      let yIdx = y2;
      let xIdx = x2;
      if (partTwo) {
        xIdx = x2 % (TOTAL_R / 5);
        yIdx = y2 % (TOTAL_C / 5);
      }
      let weight = vals[yIdx][xIdx];

      if (partTwo) {
        // This was dumb, we should have just stored original, whatever
        const originalRows = TOTAL_R / 5;
        let rowOffset = Math.floor(x2 / originalRows);
        let colOffset = Math.floor(y2 / originalRows);

        // Oh but now we're missing like the diagonals.... argh hahaha
        // if (rowOffset + weight >= 10) rowOffset++;
        // if (colOffset + weight >= 10) colOffset++;

        // Ahh not quite... because 9 wraps to 1, not 0...
        // weight = (weight + rowOffset + colOffset) % 10;

        // Yes it was this.... but i don't QUITE see why...
        weight = ((weight + rowOffset + colOffset - 1) % 9) + 1;
      }

      if (cost + weight < currCost) {
        costs.set(`${x2},${y2}`, cost + weight);
        frontier.push({ x: x2, y: y2, cost: cost + weight });
      }
    });
  }

  return [vals.length, vals[0].length];
};

// Ok... 2198 is too low...
// As is 2348... which we got with the "++" fix.... hmm
// shoot as is 2532, which we got with "<=" fix.... argh.

// Ok eventually got there

console.time("run");
console.log("Solution:", run(true));
console.timeEnd("run");

// // Min Heap by default
// const minHeap = new Heap();

// // Initialize the heap with an array
// minHeap.init([5, 18, 1]);
// // Push a new value
// minHeap.push(2);

// console.log(minHeap.peek()); //> 1
// console.log(minHeap.pop()); //> 1
// console.log(minHeap.peek()); //> 2
