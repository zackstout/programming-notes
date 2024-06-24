// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

// So..for constant extra space... we need to NOT use the hash table solution...

const twoSum = (sortedNums, target) => {
  let left = 0;
  let right = sortedNums.length - 1;
  while (left < right) {
    const sum = sortedNums[left] + sortedNums[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
};

// This is worse in terms of time.
const twoSumOther = (sortedNums, target) => {
  for (let i = 0; i < sortedNums.length; i++) {
    for (let j = i + 1; j < sortedNums.length; j++) {
      if (sortedNums[i] + sortedNums[j] === target) {
        return [i + 1, j + 1];
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9)); // [1,2]
console.log(twoSumOther([2, 7, 11, 15], 9)); // [1,2]
