/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set();
  for (const n of nums) {
    set.add(n);
  }
  const starters = [];
  for (const n of [...set]) {
    if (set.has(n - 1)) continue;
    starters.push(n);
  }
  let longest = 0;

  for (let s of starters) {
    let curr = 0;
    while (set.has(s)) {
      s++;
      curr++;
    }
    longest = Math.max(longest, curr);
  }
  return longest;
};
