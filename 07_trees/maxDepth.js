/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

// This worked, nice!

class Solution {
  /**
   * @param {TreeNode} node
   * @return {number}
   */
  maxDepth(node) {
    if (node === null) return 0;
    return Math.max(this.maxDepth(node.left), this.maxDepth(node.right)) + 1;
  }
}
