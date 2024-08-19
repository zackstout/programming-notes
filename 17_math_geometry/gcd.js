// Find greatest common denominator
function gcd(a, b) {
  return b == 0 ? a : gcd(b, a % b);
}
