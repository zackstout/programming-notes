/**
 * @param {string} board
 * @param {string} hand
 * @return {number}
 */
var findMinStep = function (board, hand) {
  const start = {
    board: board,
    hand: hand,
  };
  const isGoal = (node) => node.board === "";

  // Find all new states that can be reached by removing a single ball from "hand" and adding it somewhere within "board",
  // and then applying collapsing transformations as needed
  const getNeighbors = (node) => {
    const { board, hand } = node;
    const choices = hand.split("");
    const res = [];
    for (let i = 0; i <= board.length; i++) {
      for (const choice of choices) {
        let newStr = insertChar(board, choice, i);
        let prevStr = "";
        while (newStr !== prevStr) {
          prevStr = newStr;
          newStr = removeTripleRepeats(newStr);
        }
        let newHand = [...choices];
        newHand.splice(choices.indexOf(choice), 1);
        newHand = newHand.join("");

        // This ALMOST saves us...... but makes us fail some tests that should pass..... ugh
        if (newHand.length === 1) continue;
        res.push({
          board: newStr,
          hand: newHand,
        });
      }
    }
    return res;
  };
  const getValue = (node) => {
    return `${node.board}_${node.hand}`;
  };

  const res = bfs(start, isGoal, getNeighbors, getValue);
  if (res) {
    return hand.length - res.hand.length;
  }
  return -1;
};

function insertChar(str, char, position) {
  return str.slice(0, position) + char + str.slice(position);
}

function removeTripleRepeats(str) {
  return str.replace(/(.)\1{2,}/g, "");
}

function bfs(start, isGoal, getNeighbors, getValue) {
  let queue = [start];
  let visited = new Set();
  visited.add(getValue(start));

  while (queue.length > 0) {
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

// Damn  honestly NOT BAD for a "Hard" problem..... Not bad.
// 32 / 57 testcases passed

console.log(findMinStep("WRRBBW", "RB"));
console.log(findMinStep("WWRRBBWW", "WRBRW"));

// Not sure why this is timing out.... what's wrong....
// Maybe we need to try to ONLY insert it somewhere if that results in a triplet removal..... huh....
// like... there could never be any advantage to NOT doing that, right?
console.log(findMinStep("RRYGGYYRRYYGGYRR", "GGBBB"));

console.log(insertChar("abc", "d", 2));
