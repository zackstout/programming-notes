// Hard

/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function (grid) {
  // Hmm feels similar to perimeter problem...
  // Like we could process the grid, find all islands, and for each one determine its perimeter cells..
  // then iterate through all them and ask if it belongs to perim of multiple islands...if so then filling it would connect them and we could sum their areas...
  // i want to lookup, from a perim point, which island(s) it belongs to.

  // Yes, this fixed final 4 edge cases!!!
  if (grid.every((row) => row.every((val) => val === 1)))
    return grid.length * grid[0].length;

  // keys will be like "1,2", values will be like [0,1], the ids of islands they serve as perimeter for
  let perimeters = {};
  // keys will be ids, values areas of island
  let islands = {};

  let id = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === 1) {
        dfs(r, c, id);
        id++;
      }
    }
  }

  // return { perimeters, islands };
  //   console.log({ perimeters, islands });

  let maxSize = 0;

  Object.values(perimeters).forEach((ids) => {
    ids = [...new Set(ids)];
    const islandSizeIfFilled = ids
      .map((id) => islands[id])
      .reduce((sum, v) => sum + v, 0);
    maxSize = Math.max(islandSizeIfFilled, maxSize);
  });

  return maxSize + 1;

  function dfs(r, c, id) {
    if (r >= grid.length || r < 0 || c >= grid[0].length || c < 0) {
      // hit a border
      return;
    }
    if (grid[r][c] === -1) return;

    if (grid[r][c] === 0) {
      // hit water
      if (!perimeters[`${r},${c}`]) perimeters[`${r},${c}`] = [];
      perimeters[`${r},${c}`].push(id);
      return;
    }
    // hit land, so dfs all neighbors, and mark seen
    // Ahhh but don't use 0 to mark seen because then we will think it's ocean! use -1
    grid[r][c] = -1;

    // Sum area up
    if (!islands[id]) islands[id] = 0;
    islands[id]++;

    dfs(r + 1, c, id);
    dfs(r - 1, c, id);
    dfs(r, c + 1, id);
    dfs(r, c - 1, id);
  }
};

// Oho I think it might be working!
console.log(
  largestIsland([
    [1, 0],
    [0, 1],
  ])
);

console.log(
  largestIsland([
    [1, 1],
    [1, 0],
  ])
);

// Ho yeah!! It's pretty slow! But it works!!!
