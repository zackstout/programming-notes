// Find the minimum number of intervals to remove to make the rest non-overlapping.
// Huh... tricky.
// Greedy algo will work I guess. Always take the one with the smallest end.

// Nice, works!
function eraseOverlapIntervals(intervals) {
  // Sort ascending by end time
  intervals.sort((a, b) => a[1] - b[1]);

  let count = 0;
  let prevEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    // NOTE: For this problem, sharing a point does NOT count as overlap. (so use < instead of <=)
    if (intervals[i][0] < prevEnd) {
      count++;
    } else {
      prevEnd = intervals[i][1];
    }
  }

  return count;
}

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 4],
    [1, 4],
  ])
); // 1
