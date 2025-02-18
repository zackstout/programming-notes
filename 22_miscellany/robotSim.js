/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
  const pos = { x: 0, y: 0, dir: "N" };
  const DIRS = "NESW";
  const obLookup = new Set();
  obstacles.forEach((ob) => {
    obLookup.add(`${ob[0]},${ob[1]}`);
  });

  let maxDist = 0;

  for (const command of commands) {
    if (command === -1) {
      // right
      const idx = DIRS.indexOf(pos.dir);
      pos.dir = DIRS.concat(DIRS).at(idx + 1);
      // console.log("turn right", pos.dir);
    } else if (command === -2) {
      // left
      const idx = DIRS.indexOf(pos.dir);
      pos.dir = DIRS.concat(DIRS).at(idx + 4 - 1);
      // console.log("turn left", pos.dir);
    } else {
      // move forward k units
      let k = command;
      // console.log("walk", k);
      while (k > 0) {
        const nextPos = { ...pos };
        switch (pos.dir) {
          case "N":
            nextPos.y++;
            break;
          case "E":
            nextPos.x++;
            break;
          case "S":
            nextPos.y--;
            break;
          case "W":
            nextPos.x--;
            break;
        }
        const obKey = `${nextPos.x},${nextPos.y}`;
        if (obLookup.has(obKey)) {
          break;
        }
        pos.x = nextPos.x;
        pos.y = nextPos.y;
        const dist = pos.x * pos.x + pos.y * pos.y;
        maxDist = Math.max(maxDist, dist);
        // console.log("move to", pos.x, pos.y, dist);
        k--;
      }
    }
  }

  return maxDist;
};
