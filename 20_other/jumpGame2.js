/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  // 0 is the min num of jumps to reach 0 index
  const dp = [0];
  for (let i = 1; i < nums.length; i++) {
    let min = Infinity;
    for (let j = 0; j < dp.length; j++) {
      // If we can be reached from that cell...
      if (nums[j] >= i - j) {
        // Check if it's the min way to reach us...
        if (dp[j] < min) {
          min = dp[j];
        }
      }
    }
    dp[i] = min + 1;
  }
  return dp[nums.length - 1];
};

// Yay, this passed! It was very slow though lo..
