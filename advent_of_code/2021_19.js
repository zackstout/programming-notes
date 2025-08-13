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

  for (const b of scanners[0]) {
    beacons.add(b);
  }

  const placed = new Set();
  placed.add(0);

  while (placed.size < scanners.length) {
    // Try to align any unplaced scanner:
    outer: for (let i = 0; i < scanners.length; i++) {
      console.log("scanner", i);
      if (placed.has(i)) continue;
      const rotations = rotate24(scanners[i]);

      // Ah ok this needs to be initialized out here..

      // Each rot is a list of 24 version of the the point
      for (const rot of rotations) {
        for (let ri = 0; ri < rot.length; ri++) {
          const p = rot[ri];
          //   console.log(p);
          for (const b of [...beacons]) {
            const t = [p[0] - b[0], p[1] - b[1], p[2] - b[2]];
            // console.log(t);

            const tk = t.join(",");
            counter.set(tk, (counter.get(tk) ?? 0) + 1);
            // console.log(counter.get(tk));
            if (counter.get(tk) === 12) {
              console.log("Whoa we got one", placed.size, t);

              scannerPos.set(i, t);
              placed.add(i);
              // Transform all beacons and add to global set

              const pts = scanners[i].map((p) => rotate24([p])[0][ri]);
              // .map((p) => p[ri]);
              //   console.log("pts", ri, pts);
              //   break outer;

              pts.forEach(([px, py, pz]) => {
                beacons.add([px + t[0], py + t[1], pz + t[2]]);
              });

              continue outer;
            }
          }
        }
      }
    }
  }

  //   return scanners;
  return beacons.size;
};

// Ok it takes 13 seconds for part one..... should fix that....
// But yes! Seems to work!????
// Nah, 985 is too high...
// lmao that  is the naive total -- it didn't find any same-placed ones..... what did we miss..... scanner location?

console.time("run");
console.log("Solution:", run());
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

function rotate24(pts) {
  return pts.map(([x, y, z]) => {
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
  });
}
