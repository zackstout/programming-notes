// Given an array of positive integers nums and a positive integer target, return the minimal length of a
// subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// I think we want sliding window.

// Move end to right until we get sum >= target.
// Then move start to right until we get sum < target.
// Record the size of the window if we get a new min.

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let start = 0;
  let min = Infinity;
  for (let end = 0; end < nums.length; end++) {
    // Hmm this was copilot... not quite sure I get it....
    // I guess the point is not having to recompute sum every time....
    // Right... whole point is to do a linear traversal, see every value once,
    // and NOT look back at values you've already seen...
    target -= nums[end];
    while (target <= 0) {
      min = Math.min(min, end - start + 1);
      target += nums[start];
      start++;
    }
  }

  //   let end = 0;

  //   while (start < nums.length && end < nums.length) {}

  return min === Infinity ? 0 : min;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // 2

// Oh nice this guy goes through this exact problem,
// https://www.youtube.com/watch?v=MK-NZ4hN7rs

// Yeah it makes more sense to me to use new currentSum variable rather than using target.

var minSubArrayLen2 = function (target, nums) {
  let start = 0;
  let min = Infinity;
  let currentSum = 0;

  for (let end = 0; end < nums.length; end++) {
    currentSum += nums[end];
    // Ask, "can we do better?", and shrink the window, moving start to the right.
    while (currentSum >= target) {
      min = Math.min(min, end - start + 1);
      currentSum -= nums[start];
      start++;
    }
  }

  return min === Infinity ? 0 : min;
};
