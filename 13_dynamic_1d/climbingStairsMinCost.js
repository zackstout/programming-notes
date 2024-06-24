// You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

// You can either start from the step with index 0, or the step with index 1.

// Return the minimum cost to reach the top of the floor.

// Say we knew the min cost to reach ith stair. Then the min cost to reach the next stair would be the cost of the next stair plus the min of the two previous stairs.

const minCostClimbingStairs = (stairs) => {
  // ITERATIVE
  // let first = stairs[0];
  // let second = stairs[1];
  // for (let i = 2; i < stairs.length; i++) {
  //     const current = stairs[i] + Math.min(first, second);
  //     first = second;
  //     second = current;
  // }
  // return Math.min(first, second);

  // ========================================================

  // RECURSIVE
  if (stairs.length === 0) return 0;
  if (stairs.length === 1) return stairs[0];
  const prev = minCostClimbingStairs(stairs.slice(0, stairs.length - 1));
  const prevPrev = minCostClimbingStairs(stairs.slice(0, stairs.length - 2));
  return Math.min(prev, prevPrev) + stairs[stairs.length - 1];
};

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])); // 6
