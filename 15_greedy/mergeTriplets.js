class Solution {
  /**
   * @param {number[][]} triplets
   * @param {number[]} target
   * @return {boolean}
   */
  mergeTriplets(triplets, target) {
    let maxes = [0, 0, 0];
    triplets.forEach((t) => {
      if (t[0] <= target[0] && t[1] <= target[1] && t[2] <= target[2]) {
        // It's safe
        maxes[0] = Math.max(t[0], maxes[0]);
        maxes[1] = Math.max(t[1], maxes[1]);
        maxes[2] = Math.max(t[2], maxes[2]);
      }
    });
    return (
      maxes[0] === target[0] && maxes[1] === target[1] && maxes[2] === target[2]
    );
  }
}

// https://algo.monster/liteproblems/1899
