/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function (n, edges) {
  const adjs = {};
  for (let i = 0; i < n; i++) {
    adjs[i] = new Set();
  }
  for (const e of edges) {
    // go backwards! to find ancestors
    adjs[e[1]].add(e[0]);
  }
  const result = [];
  for (let i = 0; i < n; i++) {
    result[i] = [];
  }

  function dfs(src, visited) {
    visited.add(src);
    const nbrs = adjs[src];
    for (const n of [...nbrs]) {
      if (visited.has(n)) {
        continue;
      }
      dfs(n, visited);
    }
    return [...visited];
  }

  for (let i = 0; i < n; i++) {
    result[i] = dfs(i, new Set());
    result[i] = result[i].filter((x) => x !== i);
    result[i].sort((a, b) => a - b);
  }

  return result;
};
