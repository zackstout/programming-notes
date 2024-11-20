// Given an array nums of unique integers, return all the possible permutations. You may return the answer in any order.

// Ahh yes... I remember this one....

// Not quite sure how backtracking comes into play...

function permutations(arr) {
  //   console.log("get perms", arr);
  if (arr.length === 1) return [arr];
  //   const [first, ...rest] = arr;
  //   return permutations(rest).map((x) => [first, ...x]);

  let answer = [];

  // Ok.... I think this is it.
  for (let i = 0; i < arr.length; i++) {
    const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const perms = permutations(rest);
    // for (let j = 0; j < perms.length; j++) {
    //   answer.push([arr[i], ...perms[j]]);
    // }

    // Not sure that this is actually clearer...
    answer = [...answer, ...perms.map((x) => [arr[i], ...x])];
  }

  return answer;
}

console.log(permutations([1, 2, 3]));
