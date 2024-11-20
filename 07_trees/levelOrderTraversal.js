const tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: null,
      right: {
        value: 8,
        left: null,
        right: null,
      },
    },
    right: {
      value: 5,
      left: null,
      right: null,
    },
  },
  right: {
    value: 3,
    left: {
      value: 6,
      left: null,
      right: null,
    },
    right: {
      value: 7,
      left: null,
      right: null,
    },
  },
};

function levelOrder(root) {
  const result = [];
  //   const queue = [];
  //   queue.push(root);
  //   while (queue.length) {
  //     const size = queue.length;
  //     const level = [];
  //     for (let i = 0; i < size; i++) {
  //       const node = queue.shift();
  //       level.push(node.value);
  //       if (node.left) queue.push(node.left);
  //       if (node.right) queue.push(node.right);
  //     }
  //     result.push(level);
  //   }

  // =====================
  // Yeah this is more how I was thinking of it I guess...
  // Same idea but this "break" between levels feels clearer to me,
  // than having single queue and keeping track of size...
  let queue = [];
  queue.push([root]);
  while (queue.length) {
    const level = queue.shift();
    const nextLevel = [];
    const values = [];
    for (const node of level) {
      if (!node) continue;
      values.push(node.value);
      if (node.left) nextLevel.push(node.left);
      if (node.right) nextLevel.push(node.right);
    }
    if (values.length) result.push(values);
    if (nextLevel.length) queue.push(nextLevel);
  }
  return result;
}

console.log(levelOrder(tree)); // [[1], [2, 3], [4, 5, 6, 7], [8]]
