// Kruskal's -- greedy, continuously take lowest weight edge that does not produce cycle.
// Prim's -- greedy, continuously take lowest weight edge that connects to current tree.

// Also union-find??

class UnionFind {
  constructor(size) {
    this.parent = new Array(size).fill(0).map((_, index) => index);
    this.rank = new Array(size).fill(1);
  }

  find(node) {
    if (this.parent[node] !== node) {
      this.parent[node] = this.find(this.parent[node]); // Path compression
    }
    return this.parent[node];
  }

  union(node1, node2) {
    let root1 = this.find(node1);
    let root2 = this.find(node2);

    if (root1 !== root2) {
      if (this.rank[root1] > this.rank[root2]) {
        this.parent[root2] = root1;
      } else if (this.rank[root1] < this.rank[root2]) {
        this.parent[root1] = root2;
      } else {
        this.parent[root2] = root1;
        this.rank[root1]++;
      }
    }
  }
}

function kruskalMST(edges, numNodes) {
  edges.sort((a, b) => a[2] - b[2]); // Sort edges by weight
  let uf = new UnionFind(numNodes);
  let mst = [];

  for (let [u, v, weight] of edges) {
    if (uf.find(u) !== uf.find(v)) {
      uf.union(u, v);
      mst.push([u, v, weight]);
    }
  }

  return mst;
}

// Example usage:
function example() {
  const edges = [
    [0, 1, 1],
    [0, 2, 3],
    [1, 2, 1],
    [1, 3, 4],
    [2, 3, 2],
  ];
  let mst = kruskalMST(edges, 4);
  console.log("Minimum Spanning Tree:", mst);
}

example();
