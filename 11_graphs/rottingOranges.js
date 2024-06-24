// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

// ==========

// From copilot. Ahh yes makes sense. This looks much nicer.
// Better way to break out how many minutes have passed, with the queue = newQueue thing.

const orangesRotting2 = (grid) => {
  let fresh = 0;
  let queue = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 2) queue.push([i, j]);
      if (grid[i][j] === 1) fresh++;
    }
  }
  let minutes = 0;
  while (queue.length && fresh) {
    const newQueue = [];
    for (const [i, j] of queue) {
      for (const [newI, newJ] of [
        [i + 1, j],
        [i - 1, j],
        [i, j + 1],
        [i, j - 1],
      ]) {
        if (
          newI >= 0 &&
          newI < grid.length &&
          newJ >= 0 &&
          newJ < grid[0].length &&
          grid[newI][newJ] === 1
        ) {
          grid[newI][newJ] = 2;
          fresh--;
          newQueue.push([newI, newJ]);
        }
      }
    }
    queue = newQueue;
    minutes++;
  }
  return fresh ? -1 : minutes;
};

// Ok so.. we only need to know the longest chain from last orange to first orange.
// And we can check if any oranges are left over afterwards (in islands).
// I ... I think this is right?
// Doesn't feel the cleanest.....
const orangesRotting = (grid) => {
  const getNeighbors = (row, col) => {
    const neighbors = [];
    if (row > 0) neighbors.push([row - 1, col]);
    if (row < grid.length - 1) neighbors.push([row + 1, col]);
    if (col > 0) neighbors.push([row, col - 1]);
    if (col < grid[0].length - 1) neighbors.push([row, col + 1]);
    return neighbors;
  };

  const seen = new Map();
  // Actually we start wherever the 2 is.
  const toVisitQueue = [{ "0,0": 0 }];

  while (toVisitQueue.length > 0) {
    const next = toVisitQueue.shift();
    const [row, col] = Object.keys(next)[0].split(",").map(Number);
    const dist = Object.values(next)[0];
    seen.set(`${row},${col}`, 1 + dist);
    for (const [newRow, newCol] of getNeighbors(row, col)) {
      if (grid[newRow][newCol] === 1 && !seen.get(`${newRow},${newCol}`)) {
        toVisitQueue.push({ [`${newRow},${newCol}`]: 1 + dist });
      }
    }
  }

  // TODO: Still need to check if anyone is not reachable.

  return [...seen.values()].sort().pop() - 1;
};

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ]),
  orangesRotting2([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
); // 4

console.log(
  orangesRotting([
    [2, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1],
    [0, 1, 1, 1, 1],
    [0, 1, 1, 1, 1],
  ]),
  orangesRotting2([
    [2, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1],
    [0, 1, 1, 1, 1],
    [0, 1, 1, 1, 1],
  ])
); // 8
