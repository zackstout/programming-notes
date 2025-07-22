// For this challenge you will determine what nodes are farthest apart.
/*
have the function FarthestNodes(strArr) read strArr which will be an array of hyphenated letters representing paths between those two nodes. For example: ["a-b","b-c","b-d"] means that there is a path from node a to b (and b to a), b to c, and b to d. Your program should determine the longest path that exists in the graph and return the length of that path. So for the example above, your program should return 2 because of the paths a-b-c and d-b-c. The path a-b-c also means that there is a path c-b-a. No cycles will exist in the graph and every node will be connected to some other node in the graph.
*/

function getLongestPath(connections) {
  const neighbors = new Map();
  const visited = new Map();

  connections.forEach((conn) => {
    const [a, b] = conn.split("-");
    neighbors.set(a, [...(neighbors.get(a) ?? []).concat(b)]);
    neighbors.set(b, [...(neighbors.get(b) ?? []).concat(a)]);
    visited.set(a, false);
    visited.set(b, false);
  });

  let maxCount = 0;

  function dfs(el, count) {
    // console.log("dfs", el);

    if (visited.get(el) === true) {
      maxCount = Math.max(count, maxCount);
      return;
    }

    visited.set(el, true);

    neighbors.get(el).forEach((n) => {
      dfs(n, count + 1);
    });
  }

  [...visited].forEach(([el, visited]) => {
    dfs(el, 0);
  });

  return maxCount;
}

console.log(getLongestPath(["a-b", "b-c", "b-d"])); // 3 (a-b-c)
console.log(getLongestPath(["a-b", "b-c", "b-d", "d-e", "d-a", "d-f", "f-h"])); // 5 (a-b-d-f-h)

// vs this 200 line solution in C++.... https://github.com/gutty333/Hard-Programming-Challenges/blob/master/12_FarthestNode.cpp
