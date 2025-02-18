/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  let tIdx = 0;
  let idx = 0;
  while (tIdx < name.length) {
    let repeat = 0;
    let target = name.charAt(tIdx);
    if (typed.charAt(idx) !== target) {
      return false;
    }
    while (typed.charAt(idx) === target) {
      idx++;
      repeat++;
    }
    tIdx++;
    if (target === name.charAt(tIdx)) {
      idx -= repeat - 1;
    }
  }

  return name.charAt(tIdx) === typed.charAt(idx);
};
