// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Oh.... is it just fibonacci?? I think so...
// Because if you are at step n, you can either get there from n-1 or n-2.

const climbStairs = (n) => {
  if (n === 0) return 1;
  if (n === 1) return 1;
  return climbStairs(n - 1) + climbStairs(n - 2);
};

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3

// NOTE that "decode ways" is essentially this same problem
