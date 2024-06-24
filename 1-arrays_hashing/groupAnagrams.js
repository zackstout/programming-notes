const { isAnagram } = require("./validAnagram");

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
const groupAnagrams = (strs) => {
  const groups = {};
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    const sorted = str.split("").sort().join("");
    if (!groups[sorted]) {
      groups[sorted] = [str];
    } else {
      groups[sorted].push(str);
    }
  }
  return Object.values(groups);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
