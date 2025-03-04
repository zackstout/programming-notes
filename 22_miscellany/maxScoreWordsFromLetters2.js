// Hard

/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function (words, letters, score) {
  let maxScore = 0;
  const scores = score;

  let letterCount = {};
  letters.forEach((l) => {
    if (!letterCount[l]) letterCount[l] = 0;
    letterCount[l]++;
  });

  // TIME TO dfs...
  const path = {
    // idx: 0,
    score: 0,
    availableLetters: letterCount,
    availableWords: words.slice(0),
  };

  console.log("uhhh is this thing on");

  function dfs(path) {
    maxScore = Math.max(maxScore, path.score ?? 0);

    // A list of words.
    const candidates = path.availableWords.filter((w) =>
      canMake(w, path.availableLetters)
    );

    const { score, availableWords, availableLetters } = path;

    for (const candidate of candidates) {
      // Build the new path
      const newScore = score + getScore(candidate, scores);
      const newWords = [...availableWords];
      newWords.splice(newWords.indexOf(candidate), 1);
      const newLetters = { ...availableLetters };
      for (const char of candidate.split("")) {
        newLetters[char]--;
      }
      const newPath = {
        score: newScore,
        availableLetters: newLetters,
        availableWords: newWords,
      };
      // Recurse the new path
      dfs(newPath);
    }
  }

  dfs(path);

  return maxScore;
};

function canMake(word, count) {
  const c = { ...count };
  //   console.log("can make", word, c);
  const chars = word.split("");
  for (const char of chars) {
    if (!c[char]) return false;
    c[char]--;
  }
  return true;
}

function getScore(word, scores) {
  const res = word.split("").reduce((acc, char) => {
    const idx = char.charCodeAt(0) - 97;
    return acc + scores[idx];
  }, 0);
  //   console.log("get score", word, scores, res);
  return res;
}

console.log(
  maxScoreWords(
    ["dog", "cat", "dad", "good"],
    ["a", "a", "c", "d", "d", "d", "g", "o", "o"],
    [
      1, 0, 9, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0,
    ]
  )
);

// Ok we cleaned it up to just use dfs, no idea of trying backtrack
