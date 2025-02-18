/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const counts = {};
  for (const n of nums) {
    if (!counts[n]) counts[n] = 0;
    counts[n]++;
  }
  let v = 0;
  while (!counts[v]) {
    v++;
  }
  for (let i = 0; i < nums.length; i++) {
    if (counts[v] > 0) {
      nums[i] = v;
      counts[v]--;
    } else {
      while (!counts[v]) {
        v++;
      }
      nums[i] = v;
      counts[v]--;
    }
  }
};
