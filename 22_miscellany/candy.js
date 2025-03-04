// Hard

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let score = ratings.length;

  for (let i = 0; i < ratings.length - 1; i++) {
    const first = ratings[i];
    const second = ratings[i + 1];
    if (second !== first) score++;
  }

  return score;
};
