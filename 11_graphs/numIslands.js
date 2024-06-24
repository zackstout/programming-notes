// 1 island
const grid = [
  ["0", "1", "1", "1", "0"],
  ["0", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

// 4 islands
const grid2 = [
  ["1", "1", "0", "0", "1"],
  ["1", "1", "0", "0", "1"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

// Turn off the current cell, and then recursively turn off all the neighbors in the same island
function bfs(g, i, j) {
  if (i < 0 || i >= g.length || j < 0 || j >= g[0].length || g[i][j] === "0") {
    return;
  }
  g[i][j] = "0";
  bfs(g, i + 1, j);
  bfs(g, i - 1, j);
  bfs(g, i, j + 1);
  bfs(g, i, j - 1);
}

function numIslands(g) {
  let count = 0;
  for (let i = 0; i < g.length; i++) {
    for (let j = 0; j < g[0].length; j++) {
      if (g[i][j] === "1") {
        count++;
        bfs(g, i, j);
      }
    }
  }
  return count;
}

console.log(numIslands(grid2));
