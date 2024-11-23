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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root === null) return true;
  return isMirror(root.left, root.right);
};

function isMirror(a, b) {
  if (a === null && b === null) return true;
  if (a === null || b === null || a.val !== b.val) return false;
  return isMirror(a.left, b.right) && isMirror(a.right, b.left);
}
