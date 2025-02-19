/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let res = [false, false];
  for (let i = 2; i < n; i++) {
    res.push(true);
  }
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (res[i]) {
      count++;
      for (let j = 2 * i; j < n; j += i) {
        res[j] = false;
      }
    }
  }
  return count;
};

// Nice, Sieve of Eratasthones approach is indeed much faster!

var countPrimesSlow = function (n) {
  let c = 0;
  let x = 2;
  while (x < n) {
    if (isPrime(x)) c++;
    x++;
  }
  return c;
};

function isPrime(p) {
  let f = 2;
  while (f <= Math.sqrt(p)) {
    if (p % f === 0) return false;
    f++;
  }
  return true;
}

console.time("run");
console.log(countPrimes(417498));
console.timeEnd("run");
