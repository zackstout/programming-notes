/**
 * @param {number} n
 * @return {number}
 */
var nthPersonGetsNthSeat = function (n) {
  return n > 1 ? 0.5 : 1;
};

// LOL. Gut was right....
// Now to justify to myself...

// DESCRIPTION
// n passengers board an airplane with exactly n seats. The first passenger has lost the ticket and picks a seat randomly. But after that, the rest of the passengers will:

// Take their own seat if it is still available, and
// Pick other seats randomly when they find their seat occupied
// Return the probability that the nth person gets his own seat.

// I guess the idea is: the probability that 3rd person gets 3rd seat is EXACTLY the same as that 2nd person got 2nd seat.
// but wait... that feels wrong...
// Yeah, it's significantly more complex. Huh. Just intuition I guess...
