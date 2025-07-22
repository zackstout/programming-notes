const morseAlphabet = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  //   0: "-----",
  //   1: ".----",
  //   2: "..---",
  //   3: "...--",
  //   4: "....-",
  //   5: ".....",
  //   6: "-....",
  //   7: "--...",
  //   8: "---..",
  //   9: "----.",
  //   ".": ".-.-.-",
  //   ",": "--..--",
  //   "?": "..--..",
  //   "'": ".----.",
  //   "!": "-.-.--",
  //   "/": "-..-.",
  //   "(": "-.--.",
  //   ")": "-.--.-",
  //   "&": ".-...",
  //   ":": "---...",
  //   ";": "-.-.-.",
  //   "=": "-...-",
  //   "+": ".-.-.",
  //   "-": "-....-",
  //   _: "..--.-",
  //   '"': ".-..-.",
  //   $: "...-..-",
  //   "@": ".--.-.",
  //   " ": "/", // Space character represented by a slash
};

const morseInverse = {};
Object.keys(morseAlphabet).forEach((key) => {
  morseInverse[morseAlphabet[key]] = key;
});

let testCode = ". -- . .-. --. . -. -.-. -.--";

console.log(
  "Real answer",
  testCode.split(" ").map((c) => morseInverse[c])
);

testCode = testCode.split(" ").join("");

const testCode2 = "...";

console.log(testCode.length, testCode);

function generateTranslations(code) {
  const answers = [];

  function process(idx, currPath) {
    // if (currPath === "ET") console.log("Hooray");

    if (idx === code.length) {
      if (currPath === "EMERGENCY") console.log("we ddid it");
      answers.push(currPath);
    }
    for (let i = 1; i <= 4; i++) {
      if (i + idx > code.length) break;
      const slice = code.slice(idx, idx + i);
      const letter = morseInverse[slice];
      if (letter === undefined) {
        // console.log("undef", slice);
        continue;
      }
      process(idx + i, currPath + letter);
    }
  }

  process(0, "");

  return answers;
}

const result = generateTranslations(testCode);
console.log("Total results", result.length);

// https://stackoverflow.com/questions/22418182/decode-morse-without-white-spaces-to-text

// Well..... I think it's working????
// But it never found "EMERGENCY".....
// Ahh because testCode was wrong lol
// We got there. Nice.
