/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const c1 = {};
  const c2 = {};
  for (const c of s.split("")) {
    if (!c1[c]) c1[c] = 0;
    c1[c]++;
  }
  for (const c of t.split("")) {
    if (!c2[c]) c2[c] = 0;
    c2[c]++;
  }
  for (const key of Object.keys(c2)) {
    if (c2[key] !== c1[key]) {
      return key;
    }
  }
};
