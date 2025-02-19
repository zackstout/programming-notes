/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (startGene, endGene, bank) {
  if (!bank.includes(endGene)) return -1;
  const start = { value: startGene, times: 0 };
  const isGoal = (node) => node.value === endGene;
  const getNeighbors = (node) => {
    const res = [];
    const { times, value } = node;
    let gene = value;
    for (let i = 0; i < gene.length; i++) {
      for (const choice of "ACTG".split("")) {
        if (choice !== gene.charAt(i)) {
          const newGene = gene.slice(0, i) + choice + gene.slice(i + 1);
          if (bank.includes(newGene)) {
            res.push({ value: newGene, times: times + 1 });
          }
        }
      }
    }
    return res;
  };

  const x = bfs(start, isGoal, getNeighbors);
  return x ? x.times : -1;
};

// Ahhh I see...

// This was great first foray into using BFS template!

// Exposed issue that if we want to count times... we need to add "node.gene" or "node.value" or whatever to Visited instead....
// Otherwise it won't work, gets caught in infinite loops

function bfs(start, isGoal, getNeighbors) {
  let queue = [start];
  let visited = new Set();
  visited.add(start.value);

  while (queue.length > 0) {
    let node = queue.shift();
    // console.log("node...", node);

    if (isGoal(node)) {
      return node; // Goal found
    }

    for (let neighbor of getNeighbors(node)) {
      if (!visited.has(neighbor.value)) {
        visited.add(neighbor.value);
        queue.push(neighbor);
      }
    }
  }

  return null; // Goal not found
}

// console.log(
//   minMutation("AACCGGTT", "AAACGGTA", ["AACCGGTA", "AACCGCTA", "AAACGGTA"])
// );

// console.log(
//   minMutation("AAAAAAAA", "CCCCCCCC", [
//     "AAAAAAAA",
//     "AAAAAAAC",
//     "AAAAAACC",
//     "AAAAACCC",
//     "AAAACCCC",
//     "AACACCCC",
//     "ACCACCCC",
//     "ACCCCCCC",
//     "CCCCCCCA",
//   ])
// );

console.log(
  minMutation("AAAAAAAT", "CCCCCCCC", ["AAAAAAAC", "AAAAAAAA", "CCCCCCCC"])
);
