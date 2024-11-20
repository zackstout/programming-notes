// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

// Ohoho nice I see from approach how to use stack...
// As soon as we see a temperature that is higher than the last one,
// we can set the answer for ALL those in the stack that are less than it, and remove from stack.

const dailyTemperatures = (temperatures) => {
  const answer = new Array(temperatures.length).fill(0);

  // Holds indices of temperatures
  const stack = [];
  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const last = stack.pop();
      answer[last] = i - last;
    }
    stack.push(i);
  }
  return answer;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1, 1, 4, 2, 1, 1, 0, 0]
console.log(dailyTemperatures([30, 40, 50, 60])); // [1, 1, 1, 0]
