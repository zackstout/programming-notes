const fibonacci = (n) => {
  let a = 1;
  let b = 1;
  let t = 2;
  while (t < n) {
    let tmp = a;
    a = b;
    b = b + tmp;
    t++;
  }
  return b;
};

for (let i = 0; i < 10; i++) {
  console.log(fibonacci(i));
}

// Nice! Constant space, no need for making the whole array, good trick for DP in general
