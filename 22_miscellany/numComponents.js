/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  let numComponents = 0;
  const visited = Array.from(isConnected.length).fill(false);
  for (let i = 0; i < isConnected.length; i++) {
    if (!visited[i]) {
      numComponents++;
      dfs(i, isConnected, visited);
    }
  }

  function dfs(i, isConnected, visited) {
    const adjs = isConnected[i];
    visited[i] = true;
    for (let j = 0; j < adjs.length; j++) {
      if (adjs[j] === 1 && !visited[j]) {
        dfs(j, isConnected, visited);
      }
    }
  }
  return numComponents;
};
