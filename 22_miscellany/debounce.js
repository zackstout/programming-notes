/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
  let id = null;

  return function (...args) {
    clearTimeout(id);

    // Any time we get a new function call, within the debounce time limit window,
    // we cancel previous call, and set a new timeout. Makes sense.
    id = setTimeout(() => {
      fn(...args);
    }, t);
  };
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */

// Huh... but this guy at 1:27:25, https://www.youtube.com/watch?v=nO7J6pBEkJw&ab_channel=ThePrimeTime,
// seems to think we need to clear out id after execute, and also to store args as outerArgs.... not sure why....

// Yeah fair enough this doesn't work because Date.now and setTimeout don't work perfectly, fine
let start = Date.now();
function log(...inputs) {
  console.log([Date.now() - start, inputs]);
}
const dlog = debounce(log, 50);
setTimeout(() => dlog(1), 50);
setTimeout(() => dlog(2), 75);
