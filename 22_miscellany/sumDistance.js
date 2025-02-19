/**
 * @param {number[]} nums
 * @param {string} s
 * @param {number} d
 * @return {number}
 */
var sumDistance = function (nums, s, d) {
  const endPos = nums
    .map((n, i) => {
      return n + (s.charAt(i) === "R" ? 1 : -1) * d;
    })
    .sort((a, b) => a - b);
  //   return endPos;

  // Using prefix sum to make a sum of many pairs/differences efficient! Nice!
  // Very reminiscent of Summed Area Tables
  const prefix = [];
  prefix[0] = endPos[0];
  const n = endPos.length;

  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] + endPos[i];
  }

  let sumOfAbsoluteDifferences = 0;

  for (let i = 0; i < n - 1; i++) {
    sumOfAbsoluteDifferences +=
      prefix[n - 1] - prefix[i] - (n - 1 - i) * endPos[i];
  }

  return sumOfAbsoluteDifferences;
};

console.log(sumDistance([-2, 0, 2], "RLL", 3));

// Lol good enough
// 2565 / 2567 testcases passed

// "Movement of Robots" under Brainteasers

// Oh wow "Prefix Sum" is its own whole category of questions!
