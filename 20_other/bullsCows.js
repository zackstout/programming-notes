// Oh ok so basically wordle logic.

// We want to return how many digits are in right place, how many in wrong.

// we can use sets which I just learned have intersection!!! hell yeah

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  const secretSet = new Set(secret);
  const guessSet = new Set(guess);
  let bulls = 0;
  //   let cows = 0;

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bulls++;
    }
  }

  for (let char of secretSet) {
    if (guessSet.has(char)) {
      cows++;
    }
  }

  // Omg it's not actually a function!!! So sad
  //   const cows = secretSet.intersection(guessSet).size;

  return `${bulls}A${cows - bulls}B`;
};

// Omg, fooled by same thing again...
// it's nOT A SET
// because duplicates are allowed!!!

// Ok heck yeah, we got there, haha
var getHint2 = function (secret, guess) {
  const sCount = {};
  const gCount = {};
  let bulls = 0;
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bulls++;
    } else {
      sCount[secret[i]] = (sCount[secret[i]] || 0) + 1;
      gCount[guess[i]] = (gCount[guess[i]] || 0) + 1;
    }
  }
  const cows = Object.keys(sCount).reduce((acc, key) => {
    return acc + Math.min(sCount[key] || 0, gCount[key] || 0);
  }, 0);
  return `${bulls}A${cows}B`;
};
