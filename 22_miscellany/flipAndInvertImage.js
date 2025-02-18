/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  const res = [...image];
  res.forEach((row) => {
    const mid = Math.ceil(row.length / 2) - 1;
    for (let i = 0; i <= mid; i++) {
      const a = row[i];
      const b = row[row.length - i - 1];
      row[i] = b === 0 ? 1 : 0;
      row[row.length - i - 1] = a === 0 ? 1 : 0;
    }
  });
  return res;
};
