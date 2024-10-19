// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// I got poor performance on this one. I think I can do better.

// ATTEMPT 1:

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const c1 = getCount(nums1);
  const c2 = getCount(nums2);

  const res = [];

  for (const key of Object.keys(c1)) {
    if (c2[key]) {
      const x = Math.min(c1[key], c2[key]);
      for (let i = 0; i < x; i++) {
        res.push(key);
      }
    }
  }
  return res;
};

const getCount = (arr) => {
  const c = {};
  for (const x of arr) {
    if (!c[x]) c[x] = 0;
    c[x]++;
  }
  return c;
};
