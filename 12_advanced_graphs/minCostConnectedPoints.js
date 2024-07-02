// So this is going to be a graph, and we need to find the Minimum Spanning Tree.
// We can use Kruskal's algo which is Greedy.
// Simply sort the edges by weight, and add them to the MST if they don't create a cycle.
// Use Union-Find to detect cycles.

// NOTE: See 11_graphs/courseSchedule.js for a similar problem, where we use DFS/topological sort to detect cycles.

// Don't even take in vertices here, just compute based on edges
function detectCycle(edges) {
  if (edges.length === 0) return false;
  if (edges.length === 1) return false;

  const vertices = new Set();
  for (const edge of edges) {
    vertices.add(edge[0]);
    vertices.add(edge[1]);
  }
  //   const parent = Array(vertices.size).fill(-1);
  const parent = new Map();
  for (const vert of vertices) {
    parent.set(vert, -1);
  }
  //   console.log("parent", parent, "edges", edges);

  function find(x) {
    if (parent.get(x) === -1) return x;
    return find(parent.get(x));
  }

  function union(x, y) {
    const xRoot = find(x);
    const yRoot = find(y);
    // Optimization is possible by making more educated choice here
    parent.set(xRoot, yRoot);
  }

  //   console.log("detecting", edges);

  for (const edge of edges) {
    const [x, y] = edge;
    const xRoot = find(x);
    const yRoot = find(y);
    // If they have the same representative, we have found a cycle:
    if (xRoot === yRoot) return true;
    // Otherwise, merge them:
    union(x, y);
  }

  return false;
}

function minCostConnectPoints(points) {
  //   const vertices = [];
  const edges = new Map();
  for (let i = 0; i < points.length; i++) {
    // vertices.push(i);
    for (let j = i + 1; j < points.length; j++) {
      const weight =
        Math.abs(points[i][0] - points[j][0]) +
        Math.abs(points[i][1] - points[j][1]);
      edges.set([i, j], weight);
    }
  }

  // Krusty Krugal's algo:
  const sortedEdges = [...edges.entries()].sort((a, b) => a[1] - b[1]);
  //   console.log("Sorted edges", sortedEdges);
  const mst = [];
  //   console.log("Sorted edges", sortedEdges);
  for (const [edge, weight] of sortedEdges) {
    // const verts = Array.from(mst.length + 1).map((_, i) => i);

    // Ahhh... duh, we have to detect cycle with the ADDED EDGE.
    if (!detectCycle([...mst, edge])) {
      mst.push(edge);
    } else {
      //   console.log("Cycle detected", edge, mst);
    }
  }

  //   console.log("Mst", mst);

  // Whoa.... why + 2????
  // Oh...we're leaving out vertex 0.... huh..... but that should put us off by MORE...
  // Oh it also wrongly added [2,3] when already had [1,2] and [1,3]..... huh....
  // OOOOH I think it's that we're passing vertices every time... need to pass correct length list...
  // Guess we can't check it, won't accept javascript lol.

  // Ok we got there. Jeez lol.
  return mst.reduce((acc, edge) => acc + edges.get(edge), 0);
}

console.log(
  minCostConnectPoints([
    [0, 0],
    [2, 2],
    [3, 10],
    [5, 2],
    [7, 0],
  ])
); // 20
console.log(
  minCostConnectPoints([
    [0, 0],
    [2, 2],
    [3, 3],
    [2, 4],
    [4, 2],
  ])
); // 10
