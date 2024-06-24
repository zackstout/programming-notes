// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

const getCount = (str) => {
  const seen = {};
  for (let i = 0; i < str.length; i++) {
    if (seen[str[i]]) {
      seen[str[i]]++;
    } else {
      seen[str[i]] = 1;
    }
  }
  return seen;
};

const isAnagram = (s, t) => {
  //
  if (s.length !== t.length) {
    return false;
  }

  // Oh duh, just check if the letter count objects are the same...

  // OMG we could just SORT THE STRINGS and check equality.... lmao duh

  const c1 = getCount(s);
  const c2 = getCount(t);

  return Object.keys(c1).every((key) => c1[key] === c2[key]);
};

// console.log(isAnagram("cat", "tac"));

module.exports = { isAnagram };
