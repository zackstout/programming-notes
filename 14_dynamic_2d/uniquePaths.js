// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// Right, the prime example.
// Key insight is that if you just go in standard order through cells, since they only can move right and down,
// You are guaranteed to always have evaluated top and left of a cell before you get to it.
// So you can just add those up.

// Yeah haha.
// Call DP the "Wishful Thinking" approach.
// Just imagine if we had all the answers for smaller subproblems.
// Could we then solve the current problem?

// Again, copilot wrote it, but it's more or less exactly what we had in mind

// m = numRows, n = numCols
const uniquePaths = (m, n) => {
  // Create a 2D array of size m x n
  const dp = Array(m)
    .fill()
    .map(() => Array(n).fill(0));
  // Fill the first row and first column with 1s
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
  }
  // Fill in the rest of the array
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};
