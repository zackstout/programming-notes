// There is an undirected graph with n nodes. There is also an edges array, where edges[i] = [a, b] means that there is an edge between node a and node b in the graph.

// Return the total number of connected components in that graph.

// =============

function countConnectedComponents(numNodes, edges) {
  let count = 0;
  const nodes = new Set();
  //   edges.forEach((e) => {
  //     nodes.add(e[0]);
  //     nodes.add(e[1]);
  //   });
  for (let i = 0; i < numNodes; i++) {
    nodes.add(i);
  }

  function dfs(n) {
    if (!nodes.has(n)) return;
    nodes.delete(n);
    for (const e of edges) {
      if (e[0] === n) dfs(e[1]);
      if (e[1] === n) dfs(e[0]);
    }
  }

  for (const node of nodes) {
    dfs(node);
    count++;
  }

  return count;
}

const testEdges = [
  [0, 1],
  [1, 2],
  [2, 3],
  [4, 5],
];
console.log(countConnectedComponents(6, testEdges)); //2
