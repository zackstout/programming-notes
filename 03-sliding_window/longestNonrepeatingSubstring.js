// Given a string s, find the length of the longest substring
//  without repeating characters.

// Oh this is pretty clever..
const longestNonrepeatingSubstring = (s) => {
  let longest = 0;
  let left = 0;
  let right = 0;
  const seen = new Set();
  while (right < s.length) {
    if (!seen.has(s[right])) {
      seen.add(s[right]);
      longest = Math.max(longest, right - left + 1);
      right++;
    } else {
      seen.delete(s[left]);
      left++;
    }
  }
  return longest;
};

console.log(longestNonrepeatingSubstring("abcabcbb")); // 3
