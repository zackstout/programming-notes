// h-index, fun!

// max value of h such that the given researcher has published at least h papers that have each been cited at least h times.

// Kind of feels like DP should work... because if we knew answer for n-1, we could use that to find answer for n.
// Welll..... maybe not. Because we also need to ensure that previous "solutions" are still valid...

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  const dp = [citations[0] >= 1 ? 1 : 0];

  for (let i = 1; i < citations.length; i++) {
    const val = citations[i];
    const prev = dp[i - 1];
    // dp[i] = Math.max(prev, Math.min(val, i + 1));
    // dp[i] = val >= prev + 1 ? prev + 1 : prev;
  }

  return dp[dp.length - 1];
};

// ====================================================================================================

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex2 = function (citations) {
  // omg it can't be a Set, you can use duplicates!!!
  const used = new Set();
  let target = 1;

  for (const c of citations) {
    if (c >= target) {
      used.add(c);
      console.log("add c", c);
      target = Math.min(c, used.size);
    }

    for (const u of [...used]) {
      if (u < target) {
        used.delete(u);
      }
    }
    console.log("used", [...used]);
  }

  return used.size;
};
// ====================================================================================================

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex3 = function (citations) {
  const sorted = citations.sort((a, b) => a - b);

  console.log(sorted);
  let res = 0;

  for (let i = sorted.length - 1; i >= 0; i--) {
    if (sorted[i] > res) {
      res += 1;
    }
  }

  return res;
};

// console.log(hIndex3([3, 0, 6, 1, 5])); // 3
// console.log(hIndex3([1, 3, 1])); // 1
// console.log(hIndex3([1, 2, 2])); // 2
console.log(hIndex3([6, 6, 4, 8, 4, 3, 3, 10]));

// Ah wow, yikes, that was super obvious, bummer we didn't get that quicker

// I guess that's a danger with learning these patterns -- you're going to reach for them when not needed, at first.

// Saw similar thing with excelSheet, sort of

// For hIndex II, they give you sorted citations, and want it in log time.

// So I guess intended solution is binary search, makes sense.
// Need to find the first index which is such that the value at that index is greater than or equal to the number of elements to the right of it.

// Yeah, very nice.

// Binary search cuts search space in half each time.
// The number of times you can cut a number in half (or in tenth or whatever) is log(n).
