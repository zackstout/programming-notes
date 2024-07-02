// You are given a rectangular island heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

// The islands borders the Pacific Ocean from the top and left sides, and borders the Atlantic Ocean from the bottom and right sides.

// Water can flow in four directions (up, down, left, or right) from a cell to a neighboring cell with height equal or lower. Water can also flow into the ocean from cells adjacent to the ocean.

// Find all cells where water can flow from that cell to both the Pacific and Atlantic oceans. Return it as a 2D list where each element is a list [r, c] representing the row and column of the cell. You may return the answer in any order.

const testHeights = [
  [4, 2, 7, 3, 4],
  [7, 4, 6, 4, 7],
  [6, 3, 5, 3, 6],
];

function pacificAtlantic(heights) {
  const result = [];
  for (let i = 0; i < heights.length; i++) {
    for (let j = 0; j < heights[0].length; j++) {
      const canFlow = bfs(heights, i, j);
      if (canFlow) {
        result.push([i, j]);
      }
    }
  }
  return result;
}

// Perfect! I think we got it!

function bfs(heights, i, j) {
  const queue = [];
  const seen = new Map();

  queue.push([i, j]);

  let pacific = false;
  let atlantic = false;

  while (queue.length) {
    const [i, j] = queue.shift();
    if (seen.has(`${i},${j}`)) {
      continue;
    }
    seen.set(`${i},${j}`, true);

    if (i === 0 || j === 0) {
      pacific = true;
      //   continue;
    }
    if (i === heights.length - 1 || j === heights[0].length - 1) {
      atlantic = true;
      //   continue;
    }

    const h = heights[i][j];

    if (h >= heights[i - 1]?.[j] && i > 0) {
      queue.push([i - 1, j]);
    }
    if (h >= heights[i + 1]?.[j] && i < heights.length - 1) {
      queue.push([i + 1, j]);
    }
    if (h >= heights[i]?.[j - 1] && j > 0) {
      queue.push([i, j - 1]);
    }
    if (h >= heights[i]?.[j + 1] && j < heights[0].length - 1) {
      queue.push([i, j + 1]);
    }
  }

  return pacific && atlantic;
}

console.log(pacificAtlantic(testHeights));
