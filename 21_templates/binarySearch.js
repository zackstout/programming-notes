function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Target found
    } else if (arr[mid] < target) {
      left = mid + 1; // Search right half
    } else {
      right = mid - 1; // Search left half
    }
  }

  return -1; // Target not found
}

// Example usage:
function example() {
  let arr = [1, 3, 5, 7, 9, 11, 13];
  let target = 7;
  let result = binarySearch(arr, target);
  console.log("Target found at index:", result);
}

example();
