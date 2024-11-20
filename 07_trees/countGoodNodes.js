// A node is "good" if its value is greater than or equal to the maximum value in its path.
// (That is there are no ancestors of the node with a value greater than it.)

// This works! We were very close with intuition
class Solution {
  /**
   * @param {TreeNode} root
   * @return {number}
   */
  goodNodes(root) {
    return this.dfs(root, root.val);
  }

  dfs(root, max) {
    if (root === null) return 0;
    const count = root.val >= max ? 1 : 0;
    const newMax = Math.max(max, root.val);
    return count + this.dfs(root.left, newMax) + this.dfs(root.right, newMax);
  }
}
