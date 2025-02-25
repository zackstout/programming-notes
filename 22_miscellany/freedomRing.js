/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function (ring, key) {
  // Interesting one... would have thought DP or greedy before DFS...
  // But greedy can't be correct.
  // For "shortest path" you would think BFS over DFS...
  // =======
  // ring looks like "godding", going clockwise from start
  // key looks like "gd", that's the target to hit.
  // =======
  const start = {
    times: 0,
    value: "",
    idx: 0,
  };
  const ringChars = ring.split("");
  const getValue = (node) => node.value + node.times + node.idx;
  const isGoal = (node) => node.value === key;
  const getNeighbors = (node) => {
    const targetChar = key
      .slice(key.length - Math.abs(key.length - node.value.length))
      .charAt(0);
    const indices = ringChars
      .map((c, i) => i)
      .filter((i) => ringChars[i] === targetChar);
    const indicesDistances = indices.map((i) => {
      const d = Math.abs(i - node.idx);
      return { times: Math.min(d, ring.length - d), idx: i };
    });
    return indicesDistances.map((d) => {
      return {
        // Add 1 for pushing the button..
        times: node.times + d.times + 1,
        value: node.value + targetChar,
        idx: d.idx,
      };
    });
    // Huh... I think this is wrong...??? Seems to trip us up earlier...
    // ring caotmcaataijjxi
    // key oatjiioicitatajtijciocjcaaxaaatmctxamacaamjjx
    // should be 137 but we get 146
    //   .sort((a, b) => a.times - b.times);
  };

  const res = bfs(start, isGoal, getNeighbors, getValue);
  return res.times;
};

function bfs(start, isGoal, getNeighbors, getValue) {
  let queue = [start];
  let visited = new Set();
  visited.add(getValue(start));

  while (queue.length > 0) {
    // !!!!! ******** !!!!!!!! ******** !!!!!!!! ******** !!!!!!!!! ***** !!!!!!!!!
    // Ahhh ok this saved us....
    // But possibly leaads to timeout later on.... huh.....
    queue.sort((a, b) => a.times - b.times);
    // !!!!! ******** !!!!!!!! ******** !!!!!!!! ******** !!!!!!!!! ***** !!!!!!!!!

    let node = queue.shift();
    // console.log("node...", node);

    if (isGoal(node)) {
      return node; // Goal found
    }

    for (let neighbor of getNeighbors(node)) {
      if (!visited.has(getValue(neighbor))) {
        visited.add(getValue(neighbor));
        queue.push(neighbor);
      }
    }
  }

  return null; // Goal not found
}

// ahh sure... bug if double letter in key...
// console.log(findRotateSteps("godding", "gd"));

console.log(findRotateSteps("godding", "godding"));

console.time("run");
console.log(
  findRotateSteps(
    "xioxpdzuwyoqbesyojiwmhiayvqybfmpksgticqgpvywzcfmalcvlsberzaewgkiujhkstopffunrebhhwrhuzobcdwktapkgwft",
    "tcwwkawngvtzfutzfvekskbshsuyboaorzisirijcdqhhbpruwyptgdkpwoimuaxpfkqbexhzgjmpoqecfyowyygewbclvihlmfa"
  )
);
console.timeEnd("run");

// It did find the answer! (Or at least I expect so...)
// Took 9 seconds though lol
// I'll take it haha

// Ugh... so close
// Guess it makes sense why "BFS finding shortest" would break here...
// since we are moving a variable number of steps each time...
