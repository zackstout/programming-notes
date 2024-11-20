/**
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 */

const containsDuplicate = (nums) => {
  const seen = {};
  for (let i = 0; i < nums.length; i++) {
    if (seen[nums[i]]) {
      return true;
    }
    seen[nums[i]] = true;
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1])); // true
