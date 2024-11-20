// Ah nice, just reduce it to two-sum.

function threeSum(nums) {
  const result = new Set();

  // Ahhhh it's crucial to sort first, lool
  // Wow we had to be explicit too
  nums.sort((a, b) => a - b);

  console.log(nums);

  for (let i = 0; i < nums.length; i++) {
    const first = nums[i];
    console.log("first", first);
    // Two-pointer the rest:
    let start = i + 1;
    let end = nums.length - 1;
    // We want triplet to sum to 0:
    const target = -first;
    while (start < end) {
      const sum = nums[start] + nums[end];
      //   console.log("sum", sum);
      if (sum === target) {
        // result.push([first, nums[start], nums[end]]);
        result.add([first, nums[start], nums[end]].toString());
        // break;
      }
      if (sum < target) {
        start++;
      } else {
        end--;
      }
    }
  }

  return [...result].map((str) => str.split(",").map(Number));
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// // Problem case -- should just give single triplet, not two
console.log(threeSum([0, 0, 0, 0]));

// Augh, another issue: -- I guess we just don't need to break
console.log(threeSum([-2, 0, 1, 1, 2]));

// Wow, another one -- we missed [-3, -1, 4]. -- had to make sort explicit
console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));
