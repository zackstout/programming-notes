const tree = {
  value: 5,
  left: {
    value: 3,
    left: {
      value: 1,
      left: null,
      right: {
        value: 2,
        left: null,
        right: null,
      },
    },
    right: {
      value: 4,
      left: null,
      right: null,
    },
  },
  right: {
    value: 8,
    left: {
      value: 7,
      left: null,
      right: null,
    },
    right: {
      value: 9,
      left: null,
      right: null,
    },
  },
};

// Yeah ok I kind of get it... a little tricky.... but I think I get it.
function lowestCommonAncestor(root, p, q) {
  if (!root) return null;
  if (root.value === p || root.value === q) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left && right) return root;
  return left || right;
  // =====================
}

console.log(lowestCommonAncestor(tree, 1, 4) === tree.left);
