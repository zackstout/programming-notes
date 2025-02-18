/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
  let rook = { r: 0, c: 0 };
  for (let r = 0; r < board.length; r++) {
    const row = board[r];
    for (let c = 0; c < row.length; c++) {
      if (row[c] === "R") {
        rook.r = r;
        rook.c = c;
      }
    }
  }
  const dirs = [
    [1, 0],
    [0, 1],
    [0, -1],
    [-1, 0],
  ];
  let numAttackedPawns = 0;
  dirs.forEach((delta) => {
    const [c, r] = delta;
    const pos = { ...rook };
    while (pos.r < 8 && pos.r >= 0 && pos.c < 8 && pos.c >= 0) {
      if (board[pos.r][pos.c] === "B") {
        break;
      }
      if (board[pos.r][pos.c] === "p") {
        numAttackedPawns++;
        break;
      }

      pos.r += r;
      pos.c += c;
    }
  });
  return numAttackedPawns;
};
