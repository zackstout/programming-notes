/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const dp = [...new Array(triangle.length)].map((x, i) => [
    ...new Array(i + 1),
  ]);
  dp[0][0] = triangle[0][0];

  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j <= i; j++) {
      dp[i][j] =
        Math.min(
          dp[i - 1][j - 1] === undefined ? Infinity : dp[i - 1][j - 1],
          dp[i - 1][j] === undefined ? Infinity : dp[i - 1][j]
        ) + triangle[i][j];
    }
  }

  return Math.min(...dp[triangle.length - 1]);
};

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])); // 11

// Hell yes, kind of slow, but works!!!
// We are getting DP!
