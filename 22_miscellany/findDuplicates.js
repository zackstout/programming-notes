/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  // Oh very clever.
  // Since we have to use constant space and linear time...
  // We can use negation to determine whether appears 1x or 2x.

  const result = [];

  for (const n of nums) {
    const a = Math.abs(n);
    if (nums[a - 1] < 0) {
      result.push(a);
    }
    nums[a - 1] = -nums[a - 1];
  }

  return result;
};
