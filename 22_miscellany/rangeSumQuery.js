/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.prefix = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    this.prefix[i] = this.prefix[i - 1] + nums[i];
  }
  //   console.log("prefix", this.prefix);
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  // Nice yeah this was the issue, off by one, since we have an inclusive range here
  return this.prefix[right] - (this.prefix[left - 1] ?? 0);
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

const obj = new NumArray([1, 2, 3]);
const p1 = obj.sumRange(0, 2);
console.log("p1", p1);
