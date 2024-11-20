// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Copilot wrote it but yep this is what I would have done
const topKFrequent = (nums, k) => {
  const counts = {};
  for (let i = 0; i < nums.length; i++) {
    if (counts[nums[i]]) {
      counts[nums[i]]++;
    } else {
      counts[nums[i]] = 1;
    }
  }

  const sorted = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);

  return sorted.slice(0, k);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
