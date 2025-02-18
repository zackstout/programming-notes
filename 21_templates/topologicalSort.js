// Can just use DFS. Mark as visited, recurse through adjacent, and then add to stack. Reverse stack to get sorted order.

// This is Kahn's algorithm

function topologicalSort(graph) {
  let inDegree = {};
  let queue = [];
  let sortedOrder = [];

  // Initialize in-degree of all nodes
  for (let node in graph) {
    inDegree[node] = 0;
  }
  for (let node in graph) {
    for (let neighbor of graph[node]) {
      inDegree[neighbor] = (inDegree[neighbor] || 0) + 1;
    }
  }

  // Collect nodes with in-degree 0
  for (let node in inDegree) {
    if (inDegree[node] === 0) {
      queue.push(node);
    }
  }

  // Process the queue
  while (queue.length > 0) {
    let node = queue.shift();
    sortedOrder.push(node);

    for (let neighbor of graph[node]) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  // If sorted order doesn't include all nodes, there's a cycle
  if (sortedOrder.length !== Object.keys(graph).length) {
    throw new Error("Graph has a cycle, topological sorting not possible");
  }

  return sortedOrder;
}

// Example usage:
function example() {
  const graph = {
    A: ["B", "C"],
    B: ["D"],
    C: ["D"],
    D: [],
  };

  let result = topologicalSort(graph);
  console.log("Topological Order:", result);
}

example();
