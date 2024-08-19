/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const res = [[]];
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (!res[r]) {
        res[r] = [];
      }
      if (r === 0 || c === 0) {
        res[r][c] = 1;
      } else {
        res[r][c] = res[r - 1][c] + res[r][c - 1];
      }
    }
  }
  return res[m - 1][n - 1];
};

console.log(uniquePaths(3, 7)); // 28

// ============================================================================

// Ok ugh this one is harder.... not quite sure where we're going wrong in edge cases....
// Ok finally got there lol
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths2 = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  //   console.log("m", m, "n", n);

  //   if (obstacleGrid.length === 1 && obstacleGrid[0].length === 1) {
  //     return obstacleGrid[0][0] === 1 ? 0 : 1;
  //   }

  const res = [[]];
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (!res[r]) {
        res[r] = [];
      }
      // Oh duh we need special handling for first one... Nice and that means we can remove initial special case
      if (r === 0 && c === 0) {
        res[r][c] = obstacleGrid[r][c] === 1 ? 0 : 1;
        continue;
      }
      //   console.log("r", r, "c", c);

      res[r][c] =
        obstacleGrid[r][c] === 1
          ? 0
          : (res[r - 1]?.[c] || 0) + (res[r][c - 1] || 0);
    }
  }
  console.log("res", res);
  return res[m - 1][n - 1];
};

// console.log("0", uniquePaths2([[1, 0]])); // 0
// console.log("0", uniquePaths2([[0, 1]])); // 0
console.log("1", uniquePaths2([[0]])); // 1 -- WRONG (we say 0)
// console.log(
//   "0",
//   uniquePaths2([
//     [1, 0],
//     [0, 0],
//   ])
// ); // 0 -- WRONG (we say 2)
// console.log(
//   "0",
//   uniquePaths2([
//     [0, 0],
//     [1, 1],
//     [0, 0],
//   ])
// ); // 0 -- WRONG (we say 1)

console.log(
  "2",
  uniquePaths2([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
); // 2
