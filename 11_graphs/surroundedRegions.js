// Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.

// A region is captured by flipping all 'O's into 'X's in that surrounded region.

// =====

// Ahh... ok... so an "O" is safe if on the border, or adjacent/connection to safe "O"...
// wonder if it's easier to start at border, connect all safe "O"s, then flip all non-safe "O"s to "X"s
// Like... we just need to partition set of "O"s into safe and non-safe...
// It just seems easier to identify the safe ones first.

// =====

// First, flip all safe "O"s to "S".
// Then, flip all remaining "O"s to "X".
// Finally, flip all "S"s back to "O".

// =====

const testBoard = [
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "X", "O"],
];

function bfs(g, i, j) {
  if (i < 0 || i >= g.length || j < 0 || j >= g[0].length || g[i][j] === "X") {
    return;
  }
  // Set to "S" for "safe"
  g[i][j] = "S";
  bfs(g, i + 1, j);
  bfs(g, i - 1, j);
  bfs(g, i, j + 1);
  bfs(g, i, j - 1);
}

function capture(g) {
  for (let i = 0; i < g.length; i++) {
    for (let j = 0; j < g[0].length; j++) {
      //  Start with the safe ones on the edges
      if (
        (i === 0 || i === g.length - 1 || j === 0 || j === g[0].length - 1) &&
        g[i][j] === "O"
      ) {
        bfs(g, i, j);
      }
    }
  }

  for (let i = 0; i < g.length; i++) {
    for (let j = 0; j < g[0].length; j++) {
      if (g[i][j] === "O") g[i][j] = "X";
      if (g[i][j] === "S") g[i][j] = "O";
    }
  }

  //   console.log(g);
}

capture(testBoard);
console.log(testBoard); // [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","X","X","O"]]
