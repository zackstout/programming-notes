/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  // Ooooh I see... you add to count every time you see water or grid border.... duh.
  // Nice one!
  let perim = 0;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === 1) {
        dfs(r, c);
      }
    }
  }

  function dfs(r, c) {
    if (r >= grid.length || r < 0 || c >= grid[0].length || c < 0) {
      // hit a border
      perim++;
      return;
    }
    if (grid[r][c] === -1) return;

    if (grid[r][c] === 0) {
      // hit water
      perim++;
      return;
    }
    // hit land, so dfs all neighbors, and mark seen
    // Ahhh but don't use 0 to mark seen because then we will think it's ocean! use -1
    grid[r][c] = -1;
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  return perim;
};
