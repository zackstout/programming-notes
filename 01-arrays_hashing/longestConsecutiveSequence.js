// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// ah sure, makes sense (looked up algo)
const longestConsecutive = (nums) => {
  const set = new Set(nums);
  let longest = 0;
  for (let num of set) {
    // Only check starting points
    if (!set.has(num - 1)) {
      let current = num;
      let currentLength = 1;
      while (set.has(current + 1)) {
        current++;
        currentLength++;
      }
      longest = Math.max(longest, currentLength);
    }
  }
  return longest;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
