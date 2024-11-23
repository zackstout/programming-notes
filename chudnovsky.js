function chudnovsky(n) {
  var C = 426880 * Math.sqrt(10005);
  var L = 13591409;
  var X = 1;
  var M = 1;
  var K = 6;
  var S = L;

  for (var i = 1; i < n; i++) {
    L += 545140134;
    X *= -262537412640768000;
    M *= Math.pow(i, 3);
    K += 12;
    S += (L * M) / X / K;
  }

  return C / S;
}

console.log(chudnovsky(10)); // 3.141592653589793
