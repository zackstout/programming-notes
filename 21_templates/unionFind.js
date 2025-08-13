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
    const root1 = this.find(node1);
    const root2 = this.find(node2);

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

  connected(node1, node2) {
    return this.find(node1) === this.find(node2);
  }
}

// Example usage:
function example() {
  const uf = new UnionFind(5);
  uf.union(0, 1);
  uf.union(1, 2);
  console.log("0 and 2 connected:", uf.connected(0, 2)); // true
  console.log("0 and 3 connected:", uf.connected(0, 3)); // false
}

example();
