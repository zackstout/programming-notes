// Given beginWord, endWord and wordList.
// Find minimum number of transformations from beginWord to endWord.
// Each transformation can only change one letter at a time.
// Each transformed word must exist in the wordList.

function ladderLength(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  const queue = [[beginWord, 1]];
  while (queue.length) {
    // Huh I thought you would have to search to find min length...guess not, nice
    const [word, level] = queue.shift();
    if (word === endWord) return level;

    for (let i = 0; i < word.length; i++) {
      for (let j = 0; j < 26; j++) {
        const newWord =
          word.slice(0, i) + String.fromCharCode(97 + j) + word.slice(i + 1);
        if (wordSet.has(newWord)) {
          queue.push([newWord, level + 1]);

          // Very important to delete
          // Otherwise we will get stuck in a loop
          // But it's fine to do so because this must be the fastest we could reach this word.
          wordSet.delete(newWord);
        }
      }
    }
  }

  return 0;
}
