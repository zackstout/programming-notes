// https://leetcode.com/problems/walking-robot-simulation/

function robotSim(commands, obstacles) {
  let p = { x: 0, y: 0 };
  let dir = "N";
  const DIRS = "NESW";

  let maxDist = 0;

  while (commands.length > 0) {
    const cmd = commands.shift();
    // console.log(cmd);
    if (cmd === -1) {
      // turn right
      const dIdx = DIRS.indexOf(dir);
      dir = (DIRS + DIRS)[dIdx + 1];
    } else if (cmd === -2) {
      // turn left
      const dIdx = DIRS.indexOf(dir);
      dir = (DIRS + DIRS)[dIdx + 4 - 1];
    } else {
      // walk straight
      let n = cmd;
      walk(n);
    }

    const dist = p.x * p.x + p.y * p.y;
    maxDist = Math.max(maxDist, dist);

    // console.log(p);
  }

  function walk(n) {
    if (n === 0) return;
    const dirs = {
      N: [0, 1],
      E: [1, 0],
      S: [0, -1],
      W: [-1, 0],
    };
    const dd = dirs[dir];
    const newPos = [p.x + dd[0], p.y + dd[1]];
    if (obstacles.some((o) => o[0] === newPos[0] && o[1] === newPos[1])) {
      // Don't go there
    } else {
      p.x = newPos[0];
      p.y = newPos[1];
      walk(n - 1);
    }
  }

  return maxDist;
}

console.log(robotSim([4, -1, 3], []));
console.log(robotSim([4, -1, 4, -2, 4], [[2, 4]]));
console.log(robotSim([6, -1, -1, 6], [[0, 0]]));

// Nice, got it
