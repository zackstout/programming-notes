// Network delay.
// Starting from a source node, we want to find the minimum time it takes for all nodes to receive a signal.
// Use Dijkstra's algorithm.
// Initialize all except source with distance Infinity.
// Take the node with the smallest distance, and update its neighbors.

// Sweet, pretty sure that works.

function networkDelay(times, numNodes, startNode) {
  const vertices = new Set();
  const edges = new Map();

  // We need to know if some are unreachable:
  for (let i = 1; i <= numNodes; i++) {
    vertices.add(i);
  }

  for (const [from, to, weight] of times) {
    edges.set(from, [...(edges.get(from) || []), [to, weight]]);
  }

  const distances = new Map();
  for (let i = 1; i <= numNodes; i++) {
    distances.set(i, i === startNode ? 0 : Infinity);
  }

  const seen = new Set();
  const queue = [startNode];
  while (queue.length) {
    // Instead of just shifting I'm pretty sure we need to get minimum distance
    // const node = queue.shift();

    // Nice, neat way to get smallest-distance node
    const node = queue.reduce((a, b) =>
      distances.get(a) < distances.get(b) ? a : b
    );
    // Ah yeah we have to remove it lol
    queue.splice(queue.indexOf(node), 1);

    if (seen.has(node)) continue;
    seen.add(node);

    for (const [to, weight] of edges.get(node) || []) {
      // Only update if current distance is less than the old distance
      distances.set(
        to,
        Math.min(distances.get(to), distances.get(node) + weight)
      );
      queue.push(to);
    }
  }

  const max = Math.max(...distances.values());
  return max === Infinity ? -1 : max;
}

console.log(
  networkDelay(
    [
      [2, 1, 1],
      [2, 3, 1],
      [3, 4, 1],
    ],
    4,
    2
  )
); // 2
console.log(
  networkDelay(
    [
      [1, 2, 1],
      [2, 3, 1],
      [1, 4, 4],
      [3, 4, 1],
    ],
    4,
    1
  )
); // 3
console.log(
  networkDelay(
    [
      [1, 2, 1],
      [2, 3, 1],
    ],
    3,
    2
  )
);
