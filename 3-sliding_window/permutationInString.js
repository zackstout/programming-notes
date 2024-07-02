// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is a substring of s2.

// =====================

// Huh, well one idea is generate all permutations and check. That's dumb.
// One idea is sort both strings and check first x letters. That's better.
// Best is to use a sliding window. We can keep track of the counts of each letter in s1, and then slide a window of length s1.length over s2, decrementing the count of the letter that leaves the window and incrementing the count of the letter that enters the window. If the counts are ever equal, we have a match.

// copilot wrote that last one. i don't quite get it.

// my idea was... iterate through s2, and for each letter, check if it's in s1. if it is, check if the next x letters are in s1. if they are, return true. if not, continue. if we reach the end, return false.
// but checking if it's in s1 ...man i don't know.

// =====================

// Ahhhh tricky...

// This broke our approach:
// s1="adc"
// s2="dcda"

// So yeah we need to subtract times from i when we reset. Sure.

const checkInclusion = (s1, s2) => {
  const s1Counts = {};
  for (const letter of s1) {
    s1Counts[letter] = (s1Counts[letter] || 0) + 1;
  }

  let s1CountsCopy = { ...s1Counts };
  let times = 0;

  for (let i = 0; i < s2.length; i++) {
    const letter = s2[i];
    if (s1CountsCopy[letter] > 0) {
      s1CountsCopy[letter]--;
      times++;
      if (Object.values(s1CountsCopy).every((count) => count === 0))
        return true;
    } else {
      s1CountsCopy = { ...s1Counts };
      i -= times;
      times = 0;
    }
  }

  return false;

  // copilot sliding window approach
  // let left = 0;
  // let right = 0;
  // let count = s1.length;

  // while (right < s2.length) {
  //     if (s1Counts.has(s2[right]) && s1Counts.get(s2[right]) > 0) {
  //     s1Counts.set(s2[right], s1Counts.get(s2[right]) - 1);
  //     count--;
  //     right++;
  //     } else {
  //     if (s1Counts.has(s2[left])) {
  //         s1Counts.set(s2[left], s1Counts.get(s2[left]) + 1);
  //         count++;
  //     }
  //     left++;
  //     }

  //     if (count === 0) return true;
  // }
};

console.log(checkInclusion("ab", "eidbaooo")); // true
console.log(checkInclusion("ab", "eidboaoo")); // false
console.log(checkInclusion("adc", "dcda")); // true
