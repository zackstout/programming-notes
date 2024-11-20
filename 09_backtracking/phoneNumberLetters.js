function letterCombinations(digits) {
  const ds = digits.split("");
  const lookup = [
    "_",
    "_",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];
  let result = [""];
  if (digits.length === 0) return [];
  while (ds.length) {
    const d = parseInt(ds.shift());
    const letters = lookup[d];
    const newResult = result.flatMap((s) => {
      return letters.split("").map((l) => s + l);
    });
    result = newResult;
  }
  return result;
}

console.log(letterCombinations("34"));

// Hmm.... does this use backtracking??
// I don't think so..
// This is just the first way that made sense to me
