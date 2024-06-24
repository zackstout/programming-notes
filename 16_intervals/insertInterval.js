// Given a list of non-overlapping sorted intervals, insert a new one (merging if needed)

// So we find the first interval that starts after the new interval (starts), and the last interval that ends before the new interval (ends).
// And then we also have to take the extra two (or less) intervals on the tails of that.
// Well... we may not need them. Huh.

// We can detect if two intervals overlap: I start before you end, and you start before I end.
// We can merge two intervals by taking the min of the starts and the max of the ends.

// Ugh we really managed to mess this up lol

function mergeIntervals(a, b) {
  return [Math.min(a[0], b[0]), Math.max(a[1], b[1])];
}

function intervalsOverlap(a, b) {
  return a[0] <= b[1] && b[0] <= a[1];
}

function insertInterval(interval, intervals) {
  // ==============================
  // Copilot
  // ==============================

  // const result = [];
  // let i = 0;

  // // Add all the intervals that end before the new interval starts
  // while (i < intervals.length && intervals[i][1] < interval[0]) {
  //     result.push(intervals[i]);
  //     i++;
  // }

  // // Merge all the intervals that overlap with the new interval
  // while (i < intervals.length && intervalsOverlap(intervals[i], interval)) {
  //     interval = mergeIntervals(intervals[i], interval);
  //     i++;
  // }

  // result.push(interval);

  // // Add all the intervals that start after the new interval ends
  // while (i < intervals.length) {
  //     result.push(intervals[i]);
  //     i++;
  // }

  // return result;

  // ==============================
  let started = false;
  let ended = false;
  const starts = [];
  let mid = [];
  const ends = [];

  for (let x = 0; x < intervals.length; x++) {
    const i = intervals[x];
    if (started) {
      if (ended) {
        ends.push(i);
      } else {
        if (intervalsOverlap(i, interval)) {
          // interval = mergeIntervals(i, interval);
          continue;
        } else {
          // mid = interval;
          console.log("No overlap", i, interval);
          mid[1] = Math.max(intervals[x - 1][1], interval[1]);
          ended = true;
          ends.push(i);
        }
      }
    } else {
      if (intervalsOverlap(i, interval)) {
        mid[0] = Math.min(i[0], interval[0]);
        started = true;
      } else {
        starts.push(i);
      }
    }
  }

  return [...starts, mid, ...ends];
}

console.log(
  insertInterval(
    [2, 5],
    [
      [1, 3],
      [6, 9],
    ]
  )
); // [[1, 5], [6, 9]]
// console.log(
//   insertInterval(
//     [2, 5],
//     [
//       [1, 2],
//       [3, 5],
//       [6, 9],
//     ]
//   )
// ); // [[1, 9]]
