var containsNearbyDuplicate = function (nums, k) {
  const seen = {};
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (seen[n] !== undefined) {
      if (i - seen[n] <= k) {
        return true;
      }
    }
    seen[n] = i;
  }
  return false;
};
