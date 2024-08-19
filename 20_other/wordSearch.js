// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// Ok.... seems like we can do a simple backtracking solution here. We can just try all possibilities and see if we can find the word. We can keep track of visited cells and if we find the word, we can return true. If we don't find the word, we can backtrack and try a different path.

// Ah interesting that's not quite what I was thinking...but sure....

// Makes sense though....

// I was thinking more like BFS.... but I guess it would be DFS....
// yeah this is some copilot cooking lol

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  function backtrack(r, c, i) {
    if (i === word.length) {
      return true;
    }
    if (
      r < 0 ||
      c < 0 ||
      r >= board.length ||
      c >= board[0].length ||
      board[r][c] !== word[i]
    ) {
      return false;
    }
    let temp = board[r][c];
    board[r][c] = "#";
    let res =
      backtrack(r + 1, c, i + 1) ||
      backtrack(r - 1, c, i + 1) ||
      backtrack(r, c + 1, i + 1) ||
      backtrack(r, c - 1, i + 1);
    board[r][c] = temp;
    return res;
  }

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      if (backtrack(r, c, 0)) {
        return true;
      }
    }
  }

  return false;
};

console.log(
  "true",
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
); // true
