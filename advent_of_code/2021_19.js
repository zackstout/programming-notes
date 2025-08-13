const { readFileSync } = require("fs");

const run = (partTwo = false) => {
  const f = readFileSync("./advent_of_code/2021_19.txt", "utf8");
  const scanners = f.split("\n\n").map((line) =>
    line
      .split("\n")
      .slice(1)
      .map((l) => l.split(",").map(Number))
  );

  //   const naiveTotal = scanners.reduce((acc, val) => acc + val.length, 0);
  //   return naiveTotal;

  const beacons = new Set();
  const scannerPos = new Map();

  // For part 2
  scannerPos.set(0, [0, 0, 0]);

  for (const b of scanners[0]) {
    beacons.add(b.join(","));
  }

  const placed = new Set();
  placed.add(0);

  // For part 2:
  //   let minX = 0;
  //   let minY = 0;
  //   let minZ = 0;
  //   let maxX = -0;
  //   let maxY = -0;
  //   let maxZ = -0;
  let maxDistance = 0;

  // This.... "pre-computing" did not really seem to help haha
  const scannerRotations = scanners.map((s) => {
    const sr = s.map(rotate24);
    return [...new Array(24)].map((_, idx) => {
      return sr.map((rotatedPts) => rotatedPts[idx]);
    });
  });

  while (placed.size < scanners.length) {
    // Try to align any unplaced scanner:
    outer: for (let i = 0; i < scanners.length; i++) {
      console.log("scanner", i);
      if (placed.has(i)) continue;

      //   // R is a point-list of 24-lists
      //   const r = scanners[i].map((pt) => rotate24(pt));
      //   // Wow that took unreasonably long lol
      //   const rotations = [...new Array(24)].map((_, idx) =>
      //     r.map((rotatedPts) => rotatedPts[idx])
      //   );

      const rotations = scannerRotations[i];

      // Each rot a list of (rotated) points
      for (const rot of rotations) {
        // Huh... so now the counter CAN be inited in here.... but we still get 985....
        const counter = new Map();

        for (const p of rot) {
          for (const b of [...beacons]) {
            const [bx, by, bz] = b.split(",").map(Number);
            const t = [bx - p[0], by - p[1], bz - p[2]];

            const tk = t.join(",");
            counter.set(tk, (counter.get(tk) ?? 0) + 1);
            if (counter.get(tk) >= 12) {
              console.log("Whoa we got one", placed.size, t, b, beacons.size);

              for (const v of [...scannerPos.values()]) {
                const dist =
                  Math.abs(v[0] - t[0]) +
                  Math.abs(v[1] - t[1]) +
                  Math.abs(v[2] - t[2]);
                maxDistance = Math.max(maxDistance, dist);
              }

              scannerPos.set(i, t);

              placed.add(i);

              // For part 2:
              //   minX = Math.min(minX, t[0]);
              //   minY = Math.min(minY, t[1]);
              //   minZ = Math.min(minZ, t[2]);
              //   maxX = Math.max(maxX, t[0]);
              //   maxY = Math.max(maxY, t[1]);
              //   maxZ = Math.max(maxZ, t[2]);

              // Transform all beacons and add to global set
              rot.forEach(([px, py, pz]) => {
                beacons.add([px + t[0], py + t[1], pz + t[2]].join(","));
              });

              continue outer;
            }
          }
        }
      }
    }
  }

  // Oooooh no
  // It's the max distance between any 2 scanners.... Ok fine....

  // For part 2:
  return partTwo ? maxDistance : beacons.size;
};

// Ok it takes 13 seconds for part one..... should fix that....
// But yes! Seems to work!????
// Nah, 985 is too high...
// lmao that  is the naive total -- it didn't find any same-placed ones..... what did we miss..... scanner location?

console.time("run");
console.log("Solution:", run(true));
console.timeEnd("run");

// Interesting problem: the scanners do not know their own positions.
// If at least 12 becaons are found in common, you can determine relative distance between scanners.
// Oh god and also rotation is in the mix....
// 24 orientations total, for each scanner...

// I don't understand 24. Shouldn't it be 32? 2^3 * 4 (# of ways to consider "up")?
// Or even 2^3 * 6 (number of permutations of (123))???

// Ah yes. It's the latter, but then we divide by 2 because we only keep the ones with a Right Hand basis.
// That makes sense!

// Can we just work with distances? Would that work?
// I guess there could be technically ways to make the same distance without having the "same coordinates",
// even accounting for orientations...
// So you might get false positives....

// 24 right-handed axis-aligned orientations

function rotate24([x, y, z]) {
  return [
    [x, y, z],
    [x, z, -y],
    [x, -y, -z],
    [x, -z, y],
    [-x, y, -z],
    [-x, z, y],
    [-x, -y, z],
    [-x, -z, -y],
    [y, x, -z],
    [y, z, x],
    [y, -x, z],
    [y, -z, -x],
    [-y, x, z],
    [-y, z, -x],
    [-y, -x, -z],
    [-y, -z, x],
    [z, x, y],
    [z, y, -x],
    [z, -x, -y],
    [z, -y, x],
    [-z, x, -y],
    [-z, y, x],
    [-z, -x, y],
    [-z, -y, -x],
  ];
}

// Omg..... the issue was relying on arrays working as set indexes......
// wow
// can't believe I didn't check that lol

// Boom we got there on part 2 -- nice!
