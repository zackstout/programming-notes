/**
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
var mirrorReflection = function (p, q) {
  let times = 0;
  let amt = q / p;
  let curr = 0;
  do {
    curr += amt;
    times++;
  } while (curr % 1 > 0.01 && curr % 1 < 0.99);
  console.log(amt, times, curr, times % 2);
  return times % 2 ? 2 : 1;
};

console.log(mirrorReflection(3, 1));

// console.log(mirrorReflection(3,1));
