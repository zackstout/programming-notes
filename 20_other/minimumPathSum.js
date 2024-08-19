/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  const dp = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0));
  dp[0][0] = grid[0][0];
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }

  // Ok yeah I added this to make it shorter and cooler, but maybe initial way is actually better, with first passes...
  // Yeah and we're hitting ugly edge cases. I guess that way was better.
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      //   if (i === 0 && j === 0) {
      //     dp[i][j] = grid[i][j];
      //     continue;
      //   }
      //   dp[i][j] =
      //     Math.min(dp[i - 1]?.[j] || Infinity, dp[i][j - 1] || Infinity) +
      //     grid[i][j];
      dp[i][j] = Math.min(dp[i - 1]?.[j], dp[i][j - 1]) + grid[i][j];
    }
  }
  //   console.log(dp);
  return dp[m - 1][n - 1];
};

console.log(
  "7",
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
); // 7
