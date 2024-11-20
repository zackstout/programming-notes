// There are n cars going to the same destination along a one-lane road. The destination is target miles away.

// You are given two integer array position and speed, both of length n, where position[i] is the position of the ith car and speed[i] is the speed of the ith car (in miles per hour).

// A car can never pass another car ahead of it, but it can catch up to it and drive bumper to bumper at the same speed. The faster car will slow down to match the slower car's speed. The distance between these two cars is ignored (i.e., they are assumed to have the same position).

// A car fleet is some non-empty set of cars driving at the same position and same speed. Note that a single car is also a car fleet.

// If a car catches up to a car fleet right at the destination point, it will still be considered as one car fleet.

// Return the number of car fleets that will arrive at the destination.

// ==================

// Hmm.... I read and understand a solution... reverse sort by distance from target, then find time to reach target.
// But I don't see why it's a stack...

// Copilot:
// I guess it's because we are only interested in the car fleets that are in front of us, and we can pop them off the stack if they are slower than us.

function carFleet(target, positions, speeds) {
  const n = positions.length;
  const cars = Array(n)
    .fill()
    .map((_, i) => [positions[i], speeds[i]])
    .sort((a, b) => b[0] - a[0]);

  console.log(cars);
  let fleets = 0;
  let prevTime = 0;

  for (const [pos, speed] of cars) {
    const timeToReach = (target - pos) / speed;
    if (timeToReach > prevTime) {
      prevTime = timeToReach;
      fleets++;
    }
  }

  return fleets;
}

console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3])); // 3
console.log(carFleet(10, [4, 1, 0, 7], [2, 2, 1, 1])); // 3
