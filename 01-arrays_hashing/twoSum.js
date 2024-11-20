class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    const targets = new Map();
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if (targets.get(num) !== undefined) return [i, targets.get(num)].sort();
      targets.set(target - num, i);
    }
    return [];
  }
}
