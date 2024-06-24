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
