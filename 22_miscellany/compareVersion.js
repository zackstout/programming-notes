/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const v1 = version1.split(".").map((n) => +n);
  const v2 = version2.split(".").map((n) => +n);

  const longer = v1.length > v2.length ? v1 : v2;
  const shorter = v1.length > v2.length ? v2 : v1;
  let i = 0;
  while (i < longer.length) {
    if (longer[i] < (shorter[i] ?? 0)) return longer == v1 ? -1 : 1;
    if (longer[i] > (shorter[i] ?? 0)) return longer === v1 ? 1 : -1;
    i++;
  }
  return 0;
};
