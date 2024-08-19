// Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

// Classic backtracking problem.

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = [];

  const backtrack = (start, path) => {
    if (path.length === k) {
      // Need to make copy to not modify it later.
      res.push([...path]);
      return;
    }

    for (let i = start; i <= n; i++) {
      path.push(i);
      backtrack(i + 1, path);
      path.pop();
    }
  };

  backtrack(1, []);

  return res;
};

console.log("2", combine(4, 2)); // [[2,4],[3,4],[2,3],[1,2],[1,3],[1,4]]

// ======================================================================================

// Very similar subsets problem

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = [];

  const backtrack = (start, path) => {
    res.push([...path]);

    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(i + 1, path);
      path.pop();
    }
  };

  backtrack(0, []);

  return res;
};

console.log("2", subsets([1, 2, 3])); // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
