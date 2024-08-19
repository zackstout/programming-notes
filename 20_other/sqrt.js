// This is a good binary search one that we just saw.

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let start = 1;
  let end = x;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let midSquared = mid * mid;

    if (midSquared === x) {
      return mid;
    } else if (midSquared < x) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return end;
};

console.log("2", mySqrt(8));
console.log("11", mySqrt(125));
