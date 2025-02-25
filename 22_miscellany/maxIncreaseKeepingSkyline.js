/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
  let max = 0;

  const maxRows = [];
  const maxCols = [];
  for (let r = 0; r < grid.length; r++) {
    maxRows.push(0);
    maxCols.push(0);
  }

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid.length; c++) {
      const v = grid[r][c];
      if (v > maxRows[r]) maxRows[r] = v;
      if (v > maxCols[c]) maxCols[c] = v;
    }
  }

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid.length; c++) {
      const newHgt = Math.min(maxRows[r], maxCols[c]);
      max += newHgt - grid[r][c];
    }
  }
  return max;
};
