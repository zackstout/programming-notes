// Seems like we want path through the matrix/grid that has smallest maximum number.

// You may swim either horizontally or vertically in the grid between two adjacent squares
// if the original elevation of both squares is less than or equal to the water level at time t.

// Seems like we can just... keep track of the max elevation we've seen so far, like Djikstra's algorithm, basically.

function swimInWater(grid) {
  const R = grid.length;
  const C = grid[0].length;
  const seen = new Set();
  const queue = [[0, 0, grid[0][0]]];

  while (queue.length) {
    const [i, j, max] = queue.shift();
    if (i === R - 1 && j === C - 1) {
      // We are done!
      return max;
    }
    seen.add(`${i},${j}`);
    for (const [x, y] of [
      [i + 1, j],
      [i - 1, j],
      [i, j + 1],
      [i, j - 1],
    ]) {
      if (x < 0 || x >= R || y < 0 || y >= C || seen.has(`${x},${y}`)) {
        continue;
      }
      // Keep track of largest seen so far
      queue.push([x, y, Math.max(max, grid[x][y])]);
    }

    // Ah nice another way of finding minimum node
    queue.sort((a, b) => a[2] - b[2]);
  }
}

console.log(
  swimInWater([
    [0, 1, 2, 10],
    [9, 14, 4, 13],
    [12, 3, 8, 15],
    [11, 5, 7, 6],
  ])
); // 8

console.log(
  swimInWater([
    [0, 2],
    [1, 3],
  ])
); // 3
