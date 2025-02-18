/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function (num1, num2) {
  const [a, b] = num1.split("+").map((x) => parseInt(x));
  const [c, d] = num2.split("+").map((x) => parseInt(x));
  const real = a * c - b * d;
  const imaginary = a * d + b * c;
  return `${real}+${imaginary}i`;
};
