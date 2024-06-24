// You are given an integer array nums where each element nums[i] indicates your maximum jump length at that position.

// Return true if you can reach the last index starting from index 0, or false otherwise.

// -----------------------------

// Hmm so... seems like we can..naively just... use DP? Like, we can jump to any number of places...and then
// We just have to know... same problem from that perspective

function canJump(nums) {
  // Slick copilot solution
  //   let max = 0;
  //   for (let i = 0; i < nums.length; i++) {
  //     if (i > max) return false;
  //     max = Math.max(max, i + nums[i]);
  //   }
  //   return true;

  // -----------------------------

  // Remove first element
  const j = nums.shift();
  for (let i = 0; i < j; i++) {
    if (i >= nums.length - 1) return true;
    if (canJump(nums.slice(i))) return true;
  }

  return false;
}

console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false

// Ok we do miss this one...whatever lol
console.log(canJump([0])); // true
