/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
};

// Lol sadly that fails for very large numbers I guess....
// We'll have to do it manually!

var addBinary2 = function (a, b) {
  let carry = 0;
  let res = "";
  let i = a.length - 1;
  let j = b.length - 1;
  while (i >= 0 || j >= 0) {
    let sum = carry;
    if (i >= 0) {
      sum += parseInt(a[i--]);
    }
    if (j >= 0) {
      sum += parseInt(b[j--]);
    }
    res = (sum % 2) + res;
    carry = Math.floor(sum / 2);
  }
  if (carry) {
    res = carry + res;
  }
  return res;
};
