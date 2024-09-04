/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const newBoard = [...board].map((r) => [...r]);

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      const neighbors = [
        [-1, 0],
        [-1, 1],
        [-1, -1],
        [1, 0],
        [1, 1],
        [1, -1],
        [0, -1],
        [0, 1],
      ].map(([x, y]) => {
        // if (r+y <0 || r+y >= board.length || c+x < 0 || c+x >= board[0].length){
        //     // who cares, doesn't matter
        //     return -1;
        // }
        return board[r + y]?.[c + x];
      });
      const numLiveNeighbors = neighbors.filter((n) => n === 1).length;
      if (numLiveNeighbors < 2 || numLiveNeighbors > 3) {
        // dies
        newBoard[r][c] = 0;
      } else if (board[r][c] === 1) {
        // continues living
        newBoard[r][c] = 1;
      }
      if (board[r][c] === 0 && numLiveNeighbors === 3) {
        // born
        newBoard[r][c] = 1;
      }
    }
  }

  // Oh, ok, in order to actually "modify in place", we had to do this:
  // Sure....

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      board[r][c] = newBoard[r][c];
    }
  }

  // board = newBoard;
  return newBoard;
};

console.log(
  gameOfLife([
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ])
);
