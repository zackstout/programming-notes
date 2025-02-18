/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
  const safeNodes = new Set();
  // for (let i=0; i < graph.length; i++){
  //     if (graph[i].length===0){
  //         safeNodes.add(i);
  //     }
  // }

  while (true) {
    let changed = false;

    for (let i = 0; i < graph.length; i++) {
      const adjs = graph[i];
      if (safeNodes.has(i)) {
        continue;
      }
      // Should make first (commented) part unneeded.. since empty array with "every" will be true.
      if (adjs.every((a) => safeNodes.has(a))) {
        changed = true;
        safeNodes.add(i);
      }
    }

    if (!changed) {
      break;
    }
  }

  return [...safeNodes].sort((a, b) => a - b);
};

// We know the terminal nodes are safe. As a result, nodes that solely have outgoing edges to terminal nodes are eventually safe nodes. Then we may check the nodes that have just outgoing edges to safe nodes again and keep updating until no new safe node is discovered.

// The question is, how do we efficiently traverse from terminal nodes to nodes that only have outgoing edges to terminal nodes? We can reverse the edges of the graph to create a new graph with reversed edges. After we have visited all of the terminal nodes, we can use this new graph to go to the nodes that have edges to the terminal nodes in the original graph by using the reverse edges that we added.
