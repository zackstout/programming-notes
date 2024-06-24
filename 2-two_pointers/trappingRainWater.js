// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Try to go through layer by layer... get start and end... and then just add in all the empty ones in between...
// Oh shit it just worked! I think!
const trap = (heights) => {
  const maxHeight = Math.max(...heights);

  let result = 0;
  for (let i = 0; i < maxHeight; i++) {
    // console.log("Layer:", i);
    const tgt = i + 1;
    let start = 0;
    let end = heights.length - 1;
    while (heights[start] < tgt) {
      start++;
    }
    while (heights[end] < tgt) {
      end--;
    }
    if (start === end) continue;
    const layerResult = heights
      .slice(start, end + 1)
      .filter((h) => h < tgt).length;
    // console.log("layer result", layerResult);
    result += layerResult;
  }
  return result;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); //6
console.log(trap([4, 2, 0, 3, 2, 5])); //9
