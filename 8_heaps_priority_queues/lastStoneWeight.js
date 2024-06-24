// You are given an array of integers stones where stones[i] is the weight of the ith stone.

// We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

// If x == y, both stones are destroyed, and
// If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
// At the end of the game, there is at most one stone left.

// Return the weight of the last remaining stone. If there are no stones left, return 0.

// Well.... it isn't a heap, but oh well....
// Oh shit. Copilot filled in. There's just a MaxHeap built in??? No lol.

/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = function (stones) {
  //   const maxHeap = new MaxHeap(stones);
  //   while (maxHeap.size() > 1) {
  //     const stone1 = maxHeap.poll();
  //     const stone2 = maxHeap.poll();
  //     if (stone1 !== stone2) {
  //       maxHeap.add(stone1 - stone2);
  //     }
  //   }
  //   return maxHeap.size() === 1 ? maxHeap.poll() : 0;
  // ==============================
  //   const counts = {};
  //   for (const stone of stones) {
  //     if (!counts[stone]) counts[stone] = 0;
  //     counts[stone]++;
  //   }
  //   console.log(counts);
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1])); // 1
console.log(lastStoneWeight([1, 3])); // 2
console.log(lastStoneWeight([1])); // 1
