/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let sp = 0;
  let tp = 0;
  if (s === "") return true;
  while (sp < s.length && tp < t.length) {
    if (t[tp] === s[sp]) {
      sp++;
      tp++;
    } else {
      tp++;
    }
    if (sp === s.length) return true;
  }
  return false;
};
