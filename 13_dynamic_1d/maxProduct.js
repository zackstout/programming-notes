// Ok so we need to keep track of max_ending_here and min_ending_here (because due to negative nums, this could become new max)
// And then also max_so_far.

// Kadane's algorithm.

// Not 100% sure I grok the intuition yet..

function maximumProductSubarray(nums) {
  let maxEndingHere = nums[0];
  let minEndingHere = nums[0];
  let maxSoFar = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    const temp = maxEndingHere;
    maxEndingHere = Math.max(num, num * temp, num * minEndingHere);
    minEndingHere = Math.min(num, num * temp, num * minEndingHere);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
}
