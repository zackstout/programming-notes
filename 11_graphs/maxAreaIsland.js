const grid = [
  [0, 1, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [0, 1, 1, 0, 1],
  [0, 1, 0, 0, 1],
];

// Actually a dfs, not bfs
function dfs(g, i, j) {
  if (i < 0 || i >= g.length || j < 0 || j >= g[0].length || g[i][j] === 0) {
    return 0;
  }
  g[i][j] = 0;

  // Ahhh.... finally lol
  let count = 1;

  count += dfs(g, i + 1, j);
  count += dfs(g, i - 1, j);
  count += dfs(g, i, j + 1);
  count += dfs(g, i, j - 1);

  return count;
}

function maxAreaOfIsland(g) {
  let maxArea = 0;

  for (let i = 0; i < g.length; i++) {
    for (let j = 0; j < g[0].length; j++) {
      if (g[i][j] === 1) {
        const area = dfs(g, i, j);
        // console.log("Area", area);
        maxArea = Math.max(maxArea, area);
      }
    }
  }

  return maxArea;
}

console.log(maxAreaOfIsland(grid)); // 6
