/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let start = 0;
  let end = 0;
  let minLength = Infinity;
  let curr = nums[start];
  while (start < nums.length) {
    console.log(start, curr);
    if (curr < target) {
      end++;

      // yep, piece we were missing
      if (end === nums.length) break;

      curr += nums[end];
    } else {
      //   console.log(curr, target, start, end);
      minLength = Math.min(minLength, end - start + 1);
      curr -= nums[start];
      start++;
    }
  }
  return minLength === Infinity ? 0 : minLength;
};

console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])); // 0
