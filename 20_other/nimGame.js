// Huh... nim game...

// Take turns taking 1-3 stones. Whoever takes the last stone wins. I start.

// So if my turn and 1-3 are left, I win.
// If my turn and 4 are left, I lose.
// If my turn and 5-7 are left, I win.
// So if I have 8 left.... I lose. Pattern seems to continue like that...

// hahahah yesssss

/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
  return n % 4 !== 0;
};
