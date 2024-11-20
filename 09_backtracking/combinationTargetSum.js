// You are given an array of distinct integers nums and a target integer target. Your task is to return a list of all unique combinations of nums where the chosen numbers sum to target.

// The same number may be chosen from nums an unlimited number of times. Two combinations are the same if the frequency of each of the chosen numbers is the same, otherwise they are different.

// You may return the combinations in any order and the order of the numbers in each combination can be in any order.

// Thanks copilot...
// Yeah it makes a lot of sense. Would have been hard to write from scratch but I get it ..
function combinationSum(candidates, target) {
  const result = [];
  const current = [];
  const start = 0;

  // Sort and make unique
  candidates = [...new Set(candidates)].sort();
  console.log(candidates);

  function backtrack(start, target) {
    if (target === 0) {
      result.push([...current]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] <= target) {
        current.push(candidates[i]);
        // If we were NOT allowed to reuse nums, we should pass i+1 instead of i here, I think
        backtrack(i, target - candidates[i]);
        current.pop();
      }
    }
  }

  backtrack(start, target);
  return result;
}

console.log(combinationSum([2, 5, 6, 9], 9)); // [[2, 2, 5], [9]]
