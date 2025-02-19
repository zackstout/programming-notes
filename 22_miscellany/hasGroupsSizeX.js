/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  // why would [1,1,2,2,2,2] be true...
  // when [1,1,1,2,2,2,3,3] is false...
  // ooooh because [2,2] and [2,2]....duh lol
  // So yeah we need to check if the counts have a GCD greater than 1, i.e. whether they share any common factors.
  // Iff any of them are coprime (such as 3 and 4), it won't work.

  const counts = {};
  for (const d of deck) {
    if (!counts[d]) counts[d] = 0;
    counts[d]++;
  }
  let res = 0;
  for (const v of Object.values(counts)) {
    res = gcd(res, v);
  }
  return res > 1;
};

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

console.log(hasGroupsSizeX([1, 1, 2, 2, 3, 3, 3, 3]));
