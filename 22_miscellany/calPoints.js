/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  const record = [];
  operations.forEach((op) => {
    switch (op) {
      case "+":
        record.push(record.at(-1) + record.at(-2));
        break;
      case "D":
        record.push(record.at(-1) * 2);
        break;
      case "C":
        record.pop();
        break;
      default:
        record.push(parseInt(op));
    }
  });
  return record.reduce((s, v) => s + v, 0);
};
