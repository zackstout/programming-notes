/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  let counts = {};
  for (let i = 1; i <= n; i++) {
    counts[i] = 0;
  }
  for (const t of trust) {
    counts[t[0]]--;
    counts[t[1]]++;
  }
  for (let i = 1; i <= n; i++) {
    if (counts[i] === n - 1) {
      return i;
    }
  }
  return -1;
};
