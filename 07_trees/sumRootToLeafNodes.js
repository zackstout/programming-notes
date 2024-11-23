/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  let sum = 0;

  function dfs(r, vals = []) {
    if (r === null) return;
    // Yeah make sure to spread out into new array here, othwrise passing the same ref around
    const newVals = [...vals, r.val];
    if (r.left === null && r.right === null) {
      const v = parseInt(newVals.join(""));
      sum += v;
    }
    dfs(r.left, newVals);
    dfs(r.right, newVals);
  }

  dfs(root);

  return sum;
};
