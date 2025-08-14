// Oh wow, quite tricky...
// Dirac Dice....

// it definitely helps that only possible SUMS are [3...9]. But still... Going from 27 to 7 doesn't help THAT much right...?

// After T1 part A, there are 7 possible states.
// After T1 part B, there are 49.
// Maybe it's doable like this...

const run = () => {
  let states = [
    {
      p1: { score: 0, pos: 4 },
      p2: { score: 0, pos: 8 },
      count: 1,
    },
  ];

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

  while (times < 3) {
    times++;

    const newStates = [];

    for (const state of states) {
      const { pos } = state[player];
      //   console.log("state", state);

      for (const key of Object.keys(distribution)) {
        const amt = distribution[key];

        // ****************************
        // Omg we had to do this.... crazy. I thought it would deep spread...???
        // TODO: Definitely dig into this
        // ****************************

        const newState = {
          count: state.count,
          p1: { ...state.p1 },
          p2: { ...state.p2 },
        };

        let newPos = (pos + Number(key)) % 10;
        if (newPos === 0) newPos = 10; // Stupid hack haha, transform [0,9] into [1,10].. I think

        // Move the pawn
        newState[player].pos = newPos;
        newState[player].score += newPos;
        newState.count *= amt;

        // console.log("new state", newState, amt, newState.count);

        if (newState[player].score >= 21) {
          // Winner winner chicken dinner
          wins[player] += newState.count;
        } else {
          // Push new state
          newStates.push(newState);
        }
      }
    }

    states = newStates;
    player = player === "p1" ? "p2" : "p1";
  }

  return states;
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
