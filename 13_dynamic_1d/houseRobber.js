// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

const maximizeProfit = (nums) => {
  // I think the key insight is that you never gain by skipping 3 houses. You could take the middle one too.
  // So you always skip either 1 or 2 houses.
  // So you always make a "jump" of size 2 or 3.
  // So it essentially IS climbing stairs. Except max insteadof min.
  // Yeah i think this is right.

  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  const prev = maximizeProfit(nums.slice(0, nums.length - 2));
  const prevPrev = maximizeProfit(nums.slice(0, nums.length - 3));
  return Math.max(prev, prevPrev) + nums[nums.length - 1];
};

console.log(maximizeProfit([2, 3, 2])); // 4
console.log(maximizeProfit([1, 2, 3, 1])); // 4
console.log(maximizeProfit([0])); // 0
console.log(maximizeProfit([2, 7, 9, 3, 1])); // 12

// Honestly this way makes more sense to me, more of a "classic" DP approach:

function maximizeProfitDP(nums) {
  const dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    // What's bigger? The previous house? Or the house before that plus the current house?
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return dp[nums.length - 1];
}

console.log(maximizeProfitDP([2, 3, 2])); // 4
console.log(maximizeProfitDP([1, 2, 3, 1])); // 4
console.log(maximizeProfitDP([0])); // 0
console.log(maximizeProfitDP([2, 7, 9, 3, 1])); // 12

// ========================================================

// And for house robber 2, where houses are in a circle...
// You just run this for the first n-1 houses, and then for the last n-1 houses, and take the max of the two.
// Huh. Nice.
