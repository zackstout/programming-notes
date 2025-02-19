/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
  const [r, c] = click;
  const numMines = [...board.map((r) => [...r])];
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      numMines[r][c] = 0;
    }
  }

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      if (board[r][c] === "M") {
        const deltas = [
          [1, 1],
          [1, 0],
          [1, -1],
          [0, 1],
          [0, -1],
          [-1, 1],
          [-1, 0],
          [-1, -1],
        ];
        deltas.forEach((delta) => {
          const newR = r + delta[0];
          const newC = c + delta[1];
          if (
            newR >= 0 &&
            newC >= 0 &&
            newR < board.length &&
            newC < board[0].length
          ) {
            numMines[newR][newC] += 1;
          }
        });
      }
    }
  }

  //   console.log("num mines", numMines);

  const resBoard = [...board.map((r) => [...r])];

  if (board[r][c] === "M") {
    // clicked mine (change to "X")
    resBoard[r][c] = "X";
    return resBoard;
  } else {
    // clicked empty square
    // if has adjacent mine, show number
    // otherwise, keep opening while has no adjacent mine
    dfs(r, c);
  }

  function dfs(r, c) {
    if (r >= board.length || c >= board[0].length || r < 0 || c < 0) {
      return;
    }
    if (numMines[r][c] > 0) {
      resBoard[r][c] = numMines[r][c].toString();
      return;
    }
    if (resBoard[r][c] !== "E") return;

    resBoard[r][c] = "B";
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r + 1, c - 1);
    dfs(r + 1, c + 1);
    dfs(r - 1, c - 1);
    dfs(r - 1, c + 1);
    dfs(r, c - 1);
    dfs(r, c + 1);
  }

  return resBoard;
};

// Nice, pretty sure this is right
// heck yeah it is
console.log(
  updateBoard(
    [
      ["E", "E", "E", "E", "E"],
      ["E", "E", "M", "E", "E"],
      ["E", "E", "E", "E", "E"],
      ["E", "E", "E", "E", "E"],
    ],
    [3, 0]
  )
);
