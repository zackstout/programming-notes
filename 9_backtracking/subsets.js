// Oh clever -- you can represent all subsets as all binary numbers from 0 to 2^n - 1... Sweet

// Given a set of distinct integers, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

function subsets(arr) {
  let res = [];
  for (let i = 0; i < Math.pow(2, arr.length); i++) {
    let bin = i.toString(2);
    let subset = [];
    for (let j = 0; j < bin.length; j++) {
      if (bin[j] === "1") {
        subset.push(arr[j]);
      }
    }
    res.push(subset);
  }
  return res;
}

console.log(subsets([1, 2, 3]));

// Kind of funny because doesn't actually use Backtracking... which is useful to know how to do..
