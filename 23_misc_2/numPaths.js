// https://github.com/gutty333/Hard-Programming-Challenges/blob/master/19_ChessboardTraveling.cpp

// Ah yes the old chestnut
// Number of paths between A and B on a grid, where you can only go up/right.... Cool beans.

function numWays(p1, p2) {
  const x = Math.abs(p2.x - p1.x) + 1;
  const y = Math.abs(p2.y - p1.y) + 1;

  const dp = [];
  for (let i = 0; i < y; i++) {
    const row = [];
    for (let j = 0; j < x; j++) {
      row.push(j === 0 || i === 0 ? 1 : 0);
    }
    dp.push(row);
  }

  for (let i = 1; i < y; i++) {
    for (let j = 1; j < x; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[y - 1][x - 1];
}

console.log(numWays({ x: 3, y: 4 }, { x: 5, y: 7 })); // 3x4
