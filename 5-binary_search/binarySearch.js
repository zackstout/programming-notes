// This will run in O(log n) time, better than O(n) time.
// Assumes the nums array is sorted.

// Ok.... in binary trees... generally each "node" has a val, left, and right. Makes sense.

const binarySearch = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};
