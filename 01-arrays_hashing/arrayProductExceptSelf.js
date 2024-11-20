// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Hmm.. plenty of O(n^2)...
// you could run through (n-1) nums to make each output.

// From copilot, sure, makes sense
const productExceptSelf = (nums) => {
  const left = [];
  const right = [];
  const output = [];

  let leftProduct = 1;
  let rightProduct = 1;

  for (let i = 0; i < nums.length; i++) {
    left[i] = leftProduct;
    leftProduct *= nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    right[i] = rightProduct;
    rightProduct *= nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    output[i] = left[i] * right[i];
  }

  return output;
};

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
