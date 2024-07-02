// Yeah just detect whether array of intervals contains any overlaps.

/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
  /**
   * @param {Interval[]} intervals
   * @returns {boolean}
   */
  canAttendMeetings(intervals) {
    // lol sure
    if (intervals.length === 0) return true;

    // Sort in terms of start time
    intervals.sort((a, b) => a.start - b.start);
    // Then we can just see, for each, if its start time precedes previous end time
    let prevEnd = intervals[0].end;
    for (let i = 1; i < intervals.length; i++) {
      if (intervals[i].start < prevEnd) {
        return false;
      }
      prevEnd = intervals[i].end;
    }

    return true;
  }
}
