/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var numMovesStones = function (a, b, c) {
  let minNumMoves = 2;
  const max = Math.max(a, b, c);
  const min = Math.min(a, b, c);
  let maxNumMoves = max - min - 2;
  const diffs = [Math.abs(a - b), Math.abs(b - c), Math.abs(c - a)];
  const numConsec = diffs.filter((d) => d === 1).length;
  if (numConsec === 1) {
    minNumMoves = 1;
  }
  if (diffs.filter((d) => d === 2).length >= 1) {
    minNumMoves = 1;
  }
  if (numConsec === 2) {
    minNumMoves = 0;
    maxNumMoves = 0;
  }

  return [minNumMoves, maxNumMoves];
};

// Eh good enough haha. Feels convoluted but I think it kind of has to be.
