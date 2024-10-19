// Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after removing k digits from num.

// Ex:
// Input: num = "1432219", k = 3
// Output: "1219"

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  let min = parseInt(num);

  for (let i = 0; i < k; i++) {
    let innerMin = Infinity;
    const str = min.toString(10);
    for (let j = 0; j < str.length; j++) {
      const s = str.slice(0, j) + str.slice(j + 1);
      const n = parseInt(s);
      innerMin = Math.min(innerMin, n);
    }
    min = innerMin;
    console.log("new min", min);
  }

  return min;
};

// console.log("1219", removeKdigits("1432219", 3)); // 1219
console.log("200", removeKdigits("10200", 1)); // 200

// https://algo.monster/liteproblems/402
