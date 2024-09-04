// Given an integer n, return the least number of perfect square numbers that sum to n.

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const dp = [0];

  for (let i = 1; i <= n; i++) {
    let min = Infinity;
    for (let j = 1; j * j <= i; j++) {
      min = Math.min(min, dp[i - j * j] + 1);
    }
    dp.push(min);
  }

  return dp[n];
};

// First thought was greedy, but 12 immediately shows that doesn't work. Greedy would be 9 + 1+1+1, but 4+4+4 is better.

// Oh wait i'm getting an idea..
// Feels a lot like making change...!!!
// Like to know answer for 12, we need to know answer for 11, 8, 3, 0. Nice.
// So we can use DP.

// Yeah it's exactly the same.
// It's a special case, where the "coin" values are squares up to n.
