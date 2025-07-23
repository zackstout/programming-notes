// Given starting and target square, find minimal number of knight jumps to reach it.

// Straightforward BFS.

function bfs(start, isGoal, getNeighbors) {
  const queue = [start];
  const visited = new Set();
  visited.add(start);

  while (queue.length > 0) {
    const node = queue.shift();

    if (isGoal(node)) {
      return node; // Goal found
    }

    for (const neighbor of getNeighbors(node)) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return null; // Goal not found
}

function knightJumps(start, end) {
  function isGoal(node) {
    return node.x === end.x && node.y === end.y;
  }

  function getNeighbors(node) {
    const jumps = [
      [1, 2],
      [1, -2],
      [-1, 2],
      [-1, -2],
      [2, 1],
      [2, -1],
      [-2, 1],
      [-2, -1],
    ];
    return jumps
      .map(([x, y]) => {
        return { x: node.x + x, y: node.y + y, jumps: node.jumps + 1 };
      })
      .filter(({ x, y }) => {
        return x >= 1 && y >= 1 && x <= 8 && y <= 8;
      });
  }

  const result = bfs({ ...start, jumps: 0 }, isGoal, getNeighbors);
  console.log("Goal found:", result);
  return result;
}

knightJumps({ x: 1, y: 1 }, { x: 3, y: 3 });
