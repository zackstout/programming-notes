// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// it's just fibonacci, right?

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const dp = [1, 1]; // 1 way to climb 0 stairs, and 1 way to climb 1 stair

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
