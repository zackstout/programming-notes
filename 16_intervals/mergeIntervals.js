function mergeIntervals(a, b) {
  if (a.length === 0) return b;
  if (b.length === 0) return a;
  return [Math.min(a[0], b[0]), Math.max(a[1], b[1])];
}

function intervalsOverlap(a, b) {
  if (a.length === 0 || b.length === 0) return true;
  return a[0] <= b[1] && b[0] <= a[1];
}

// Given an array of intervals where intervals[i] = [start_i, end_i], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Nice, idea worked out well.
function merge(intervals) {
  const result = [];

  // Ahhhh nice, tricky, must start with lowest possible start.
  intervals.sort((a, b) => a[0] - b[0]);

  let prev = [];

  for (let i = 0; i < intervals.length; i++) {
    const current = intervals[i];
    if (intervalsOverlap(prev, current)) {
      prev = mergeIntervals(prev, current);
      //   console.log(current, prev);
    } else {
      if (!isNaN(prev[0])) {
        result.push(prev);
      }
      prev = current;
    }
  }
  // Don't forget the last one
  result.push(prev);

  return result;
}

// console.log(
//   merge([
//     [1, 3],
//     [1, 5],
//     [6, 7],
//   ])
// ); // [[1,5],[6,7]]

console.log(
  merge([
    [1, 2],
    [2, 3],
  ])
); // Should be [1,3]... we're getting [2,3]... Ahh merge was issue with empty array.
