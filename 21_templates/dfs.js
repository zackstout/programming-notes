function dfs(start, isGoal, getNeighbors) {
  let stack = [start];
  let visited = new Set();
  visited.add(start);

  while (stack.length > 0) {
    let node = stack.pop();

    if (isGoal(node)) {
      return node; // Goal found
    }

    for (let neighbor of getNeighbors(node)) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        stack.push(neighbor);
      }
    }
  }

  return null; // Goal not found
}

// Example usage:
function example() {
  function isGoal(node) {
    return node === 5; // Example goal condition
  }

  function getNeighbors(node) {
    const graph = {
      1: [2, 3],
      2: [4, 5],
      3: [6],
      4: [],
      5: [],
      6: [],
    };
    return graph[node] || [];
  }

  let result = dfs(1, isGoal, getNeighbors);
  console.log("Goal found:", result);
}

example();

// Only diff from bfs is stack vs queue, makes sense
