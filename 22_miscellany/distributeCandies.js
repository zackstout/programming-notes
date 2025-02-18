/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  const numAllowed = candyType.length / 2;
  const numTypes = new Set(candyType).size;
  return Math.min(numAllowed, numTypes);
};
