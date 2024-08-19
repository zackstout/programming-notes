// Oooh a "hard" one... fun

// Let's make some helpers...

const makeSpaces = (n) => {
  return Array(n).fill(" ").join("");
};

// Will take array of n words and n-1 spaces (integers)
const makeLine = (words, spaces) => {
  let line = words[0];
  for (let i = 1; i < words.length; i++) {
    line += makeSpaces(spaces[i - 1]) + words[i];
  }
  return line;
};

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  const lines = [];

  let line = [];

  while (words.length > 0) {
    const word = words.shift();
    const newLength =
      line.reduce((acc, word) => acc + word.length, 0) +
      word.length +
      line.length;
    if (newLength > maxWidth) {
      // Move on to next line..
      lines.push(line);
      line = [word];
    } else {
      line.push(word);
    }
  }
  if (line.length > 0) {
    lines.push(line);
  }

  // Now we have our lines... nice. Now we need to justify them.
  const textLines = lines.map((line, idx) => {
    // Ah sure because we cannot divide by 0...
    if (line.length === 1) {
      return line[0] + makeSpaces(maxWidth - line[0].length);
    }
    const totalLength = line.reduce((acc, word) => acc + word.length, 0);
    const totalSpaces = maxWidth - totalLength;
    const spaces = Math.floor(totalSpaces / (line.length - 1));
    const spacesArray = Array(line.length - 1).fill(spaces);
    const extraSpaces = totalSpaces % (line.length - 1);
    // Ensure we fill extra spaces from left to right
    for (let i = 0; i < extraSpaces; i++) {
      spacesArray[i] += 1;
    }
    const justifiedLine = makeLine(line, spacesArray);

    // Last line should be left justified
    if (idx === lines.length - 1) {
      const lastLine = lines[lines.length - 1];
      const justifiedLine = lastLine.join(" ");
      return justifiedLine + makeSpaces(maxWidth - justifiedLine.length);
    }

    return justifiedLine;
  });

  return textLines;
};

console.log(
  fullJustify(
    ["This", "is", "an", "example", "of", "text", "justification."],
    16
  )
);
