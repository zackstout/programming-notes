/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function (words, letters, score) {
  let maxScore = 0;

  let letterCount = {};
  letters.forEach((l) => {
    if (!letterCount[l]) letterCount[l] = 0;
    letterCount[l]++;
  });

  function canMake(word, count) {
    const c = { ...count };
    // console.log("can make", word, c);
    const chars = word.split("");
    for (const char of chars) {
      if (!c[char]) return false;
      c[char]--;
    }
    return true;
  }

  // TIME TO BACKTRACK...
  //   const candidates = [...words];

  const path = {
    // idx: 0,
    score: 0,
    availableLetters: letterCount,
    availableWords: words.slice(0),
  };

  const generateCandidates = (path) => {
    return (
      path.availableWords
        //   .slice(0)
        .filter((w) => canMake(w, path.availableLetters))
    );
  };

  const processSolution = (path) => {
    maxScore = Math.max(maxScore, path.score);
  };

  const isSolution = (path) => true;

  //   return letterCount;

  //   return generateCandidates(path, words);

  console.log("uhhh is this thing on");

  backtrack(path, isSolution, processSolution, generateCandidates, score);

  return maxScore;
};

function getScore(word, scores) {
  const res = word.split("").reduce((acc, char) => {
    const idx = char.charCodeAt(0) - 97;
    return acc + scores[idx];
  }, 0);
  //   console.log("get score", word, score, res);
  return res;
}

function backtrack(
  path,
  isSolution,
  processSolution,
  generateCandidates,
  allScores
) {
  if (isSolution(path)) {
    processSolution(path);
    // return;
  }

  // A list of words.
  let candidates = generateCandidates(path);

  //   console.log("backtracking on...", candidates);

  const { score, availableWords, availableLetters } = path;

  for (const candidate of candidates) {
    const newScore = score + getScore(candidate, allScores);
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
    // path.push(candidate); // Make a move
    backtrack(
      newPath,
      isSolution,
      processSolution,
      generateCandidates,
      allScores
    );
    // path.pop(); // Undo the move (backtrack)
  }
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

// Hey hey we did it!!! No backtracking but.... oh well
