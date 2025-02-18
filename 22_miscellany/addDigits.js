/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let n = num.toString();
  while (n.length > 1) {
    n = n.split("").reduce((sum, v) => sum + parseInt(v), 0);
    n = n.toString();
  }
  return parseInt(n);
};

// UPDATE : The O(1) approach method is called Digit Root. Check it out.
