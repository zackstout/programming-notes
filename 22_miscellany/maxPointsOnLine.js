// Hard

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  let result = 0;

  if (points.length <= 1) return 1;

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const p1 = points[i];
      const p2 = points[j];
      const vec = { x: p1[0] - p2[0], y: p1[1] - p2[1] };
      const ang = Math.atan2(vec.y, vec.x);
      let numOnLine = 2;

      //   console.log("OG angle", ang);

      for (let k = j + 1; k < points.length; k++) {
        const p3 = points[k];
        const v2 = { x: p1[0] - p3[0], y: p1[1] - p3[1] };
        const a2 = Math.atan2(v2.y, v2.x);
        // console.log("new angle", a2, isSameAngle(a2, ang));
        if (isSameAngle(a2, ang)) numOnLine++;
      }
      result = Math.max(result, numOnLine);
    }
  }

  return result;
};

function isSameAngle(a, b) {
  //   console.log("is same", a, b, Math.abs(a - b), Math.abs(a - b) < 1e6);
  if (Math.abs(a - b) < 1e-6) return true;
  const larger = Math.max(a, b);
  const smaller = Math.min(a, b);
  if (Math.abs(larger - smaller - Math.PI) < 1e-6) return true;
  return false;
}

console.log(
  maxPoints([
    [1, 1],
    [3, 2],
    [5, 3],
    [4, 1],
    [2, 3],
    [1, 4],
  ])
);

// Huh! Ok! Figured that should be wrong for some reason..... Oh well! Seems to be fine.
