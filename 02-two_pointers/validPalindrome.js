/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let i = 0;
  while (i < s.length / 2) {
    if (s.charAt(i) !== s.charAt(s.length - i - 1)) {
      return false;
    }
    i++;
  }
  return true;
};
