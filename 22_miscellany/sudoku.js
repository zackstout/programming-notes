// Hard

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  // Do the thing..
  // To generate new candidates from a given board state..
  // We put each possible number (9 choices) in each available empty space.

  function dfs(grid) {
    let numDots = 0;
    for (const row of grid) {
      for (const char of row) {
        if (char === ".") numDots++;
      }
    }
    console.log("dfs", numDots);
    if (!isValid(grid)) {
      // We can never turn an invalid grid into a valid one by adding more numbers. Just kill search here.
      return;
    }
    if (isComplete(grid)) {
      // We are done!
      console.log("DONE", grid);
      return grid;
    }

    // For all candidates... just call dfs for it, right?
    for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[0].length; c++) {
        if (grid[r][c] === ".") {
          for (let i = 1; i <= 9; i++) {
            const newGrid = [...grid].map((r) => r.slice(0));
            newGrid[r][c] = i.toString();
            dfs(newGrid);
          }
        }
      }
    }
  }

  const result = dfs(board);
  // Don't forget to mutate original board now

  return result;
};

function isValidSet(arr) {
  const nums = arr.filter((x) => x !== ".");
  return nums.length === new Set(nums).size;
}

function isValid(grid) {
  // Rows
  for (const row of grid) {
    if (!isValidSet(row)) return false;
  }
  // Columns
  for (let c = 0; c < 9; c++) {
    const col = grid.map((r, i) => r[c]);
    if (!isValidSet(col)) return false;
  }
  // Boxes
  const boxes = [
    [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 1],
      [1, 2],
      [2, 0],
      [2, 1],
      [2, 2],
    ],
    [
      [3, 0],
      [3, 1],
      [3, 2],
      [4, 0],
      [4, 1],
      [4, 2],
      [5, 0],
      [5, 1],
      [5, 2],
    ],
    [
      [6, 0],
      [6, 1],
      [6, 2],
      [7, 0],
      [7, 1],
      [7, 2],
      [8, 0],
      [8, 1],
      [8, 2],
    ],
    [
      [0, 3],
      [0, 4],
      [0, 5],
      [1, 3],
      [1, 4],
      [1, 5],
      [2, 3],
      [2, 4],
      [2, 5],
    ],
    [
      [3, 3],
      [3, 4],
      [3, 5],
      [4, 3],
      [4, 4],
      [4, 5],
      [5, 3],
      [5, 4],
      [5, 5],
    ],
    [
      [6, 3],
      [6, 4],
      [6, 5],
      [7, 3],
      [7, 4],
      [7, 5],
      [8, 3],
      [8, 4],
      [8, 5],
    ],
    [
      [0, 6],
      [0, 7],
      [0, 8],
      [1, 6],
      [1, 7],
      [1, 8],
      [2, 6],
      [2, 7],
      [2, 8],
    ],
    [
      [3, 6],
      [3, 7],
      [3, 8],
      [4, 6],
      [4, 7],
      [4, 8],
      [5, 6],
      [5, 7],
      [5, 8],
    ],
    [
      [6, 6],
      [6, 7],
      [6, 8],
      [7, 6],
      [7, 7],
      [7, 8],
      [8, 6],
      [8, 7],
      [8, 8],
    ],
  ];

  for (const box of boxes) {
    const arr = box.map(([r, c]) => grid[r][c]);
    if (!isValidSet(arr)) {
      return false;
    }
  }

  return true;
}

function isComplete(grid) {
  for (const row of grid) {
    for (const char of row) {
      if (char === ".") return false;
    }
  }
  return true;
}

const exInput = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValid(exInput), isComplete(exInput), solveSudoku(exInput));
