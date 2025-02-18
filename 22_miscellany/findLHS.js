/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  const counts = {};
  for (const n of nums) {
    if (!counts[n]) counts[n] = 0;
    counts[n]++;
  }
  let max = 0;
  Object.keys(counts).forEach((n) => {
    if (n === null) return;
    if (counts[+n + 1] === undefined) return;
    max = Math.max(max, counts[n] + counts[+n + 1]);
  });
  return max;
};
