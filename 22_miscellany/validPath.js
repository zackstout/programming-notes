/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  if (source === destination) return true;
  const adjs = {};
  for (let i = 0; i < n; i++) {
    adjs[i] = new Set();
  }
  for (const e of edges) {
    adjs[e[0]].add(e[1]);
    adjs[e[1]].add(e[0]);
  }
  function dfs(src, tgt, visited) {
    if (adjs[src].has(tgt)) {
      return true;
    }
    visited.add(src);
    const nbrs = adjs[src];
    for (const n of [...nbrs]) {
      if (visited.has(n)) {
        continue;
      }
      if (dfs(n, tgt, visited)) {
        return true;
      }
    }
    return false;
  }
  return dfs(source, destination, new Set());
};
