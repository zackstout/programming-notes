/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = [0];
  for (let i = 1; i <= amount; i++) {
    let min = Infinity;
    for (const c of coins) {
      if (i - c >= 0) {
        min = Math.min(min, dp[i - c] + 1);
      }
    }

    // dp[i] = min === Infinity ? 0 : min;

    // Ahh I see we need to preserve Infinity here..
    // Ah so close to ripping this one off haha
    dp[i] = min;
  }
  //   console.log(dp);
  return dp[amount] === Infinity ? -1 : dp[amount];
};

console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([2], 3));
