// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

/**
 * Ooooh duh... we can use two pointers,
 * and always move the pointer with less height.
 * Because if you move the other one, the area can only get smaller.
 */

const maxArea = (heights) => {
  let maxArea = 0;

  let left = 0;
  let right = heights.length - 1;
  while (left < right) {
    const area = Math.min(heights[left], heights[right]) * (right - left);
    maxArea = Math.max(maxArea, area);
    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
