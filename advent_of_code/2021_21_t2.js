// Oh wow, quite tricky...
// Dirac Dice....

// it definitely helps that only possible SUMS are [3...9]. But still... Going from 27 to 7 doesn't help THAT much right...?

// After T1 part A, there are 7 possible states.
// After T1 part B, there are 49.
// Maybe it's doable like this...

const run = () => {
  // let states = [
  //   {
  //     p1: { score: 0, pos: 4 },
  //     p2: { score: 0, pos: 8 },
  //     count: 1,
  //   },
  // ];

  let states = new Map();

  // Format is "{p1.score},{p1.pos};{p2.score},{p2.pos}"

  // All we need to update to go from TESTING to LIVE
  states.set("0,10;0,7", 1);

  // Built up in browser, easy triple loop counter
  const distribution = {
    3: 1,
    4: 3,
    5: 6,
    6: 7,
    7: 6,
    8: 3,
    9: 1,
  };

  let times = 0;

  let player = "p1";

  const wins = {
    p1: 0,
    p2: 0,
  };

  while (times < 40) {
    times++;

    const newStates = new Map();

    for (const stateKey of [...states.keys()]) {
      const [p1, p2] = stateKey.split(";").map((x) => x.split(",").map(Number));
      const amt = states.get(stateKey);

      const [score, pos] = player === "p1" ? p1 : p2;

      for (const distributionKey of Object.keys(distribution)) {
        const distributionAmt = distribution[distributionKey];
        let newPos = (pos + Number(distributionKey)) % 10;
        if (newPos === 0) newPos = 10; // Stupid hack haha, transform [0,9] into [1,10].. I think
        const newScore = score + newPos;

        if (newScore >= 21) {
          // Winner winner chicken dinner
          wins[player] += amt * distributionAmt;
        } else {
          // Update newStates -- either with new key or update existing
          let newStateKey = stateKey.split(";");
          if (player === "p1") {
            newStateKey[0] = `${newScore},${newPos}`;
          } else {
            newStateKey[1] = `${newScore},${newPos}`;
          }

          // Omfg I forgot to also join in the next one...
          // AND THE PARENS!!!!!!!!
          newStates.set(
            newStateKey.join(";"),
            (newStates.get(newStateKey.join(";")) ?? 0) + amt * distributionAmt
          );
        }
      }
    }

    states = newStates;
    player = player === "p1" ? "p2" : "p1";
  }

  //   return states;
  return wins;
};

console.time("run");
console.log("Solution:", run());
console.timeEnd("run");

// Ok 8 times is 1s..... 9 times is 3.6s......

// How do we know when we end....

// Oh perfect, we get same answer for 10 times! which takes 14s.

// Noooo it's too low.....

// Oh duh because we were doing test input!!!

// But we're not quite even close to real answers....

// I wonder if we can merge. Like are we duplicating states.... can we merge their counts...
// That feels like it could be the answer s

// ====================

// OK WE'RE DOING THAT NOW....

// This DOES SEEM to run faster.....

// Uh oh but we're stopping way too low.... at like 11 digit numbers and it never grows.... huh...

// yeasssssss we forgot to join the key correctly in both lines.... ugh hahaha

// nvm.... still same issue.....

// omfg no way

// it was parentheses here

//             (newStates.get(newStateKey.join(";")) ?? 0) + amt * distributionAmt

// HILARIOUS

// WE DID IT YES!!!!!!

// quite surprising how much Map helped us there..... but yeah it makes sense. Must have been much duplication.
