// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.

// Return true if you can finish all courses. Otherwise, return false.

// =====================

// TOPOLOGICAL SORT -- https://www.cs.princeton.edu/~wayne/kleinberg-tardos/pdf/03Graphs.pdf

// the first Hint: "This problem is equivalent to finding if a cycle exists in a directed graph. If a cycle exists, no topological ordering exists and therefore it will be impossible to take all courses."

// =====================
// Ok so we need to check if a cycle exists in the graph. If it does, we can't take all courses.

// And then next problem, CourseSchedule2, is to return the order of courses to take.
// So they're essentially the same. Just that the second one is a bit more complicated.

// function findOrder(numCourses, prerequisites) {
//   const graph = new Map();
//   const visited = new Set();
//   // const visiting = new Set();
//   const order = [];

//   for (let i = 0; i <= numCourses; i++) {
//     graph.set(i, []);
//   }

//   //   console.log("Graph", graph);

//   for (const [course, prereq] of prerequisites) {
//     graph.set(course, [...graph.get(course), prereq]);
//   }

//   //   console.log("Graph", graph);

//   function dfs(course) {
//     if (visited.has(course)) return true;

//     for (const prereq of graph.get(course)) {
//       if (!visited.has(prereq)) {
//         dfs(prereq);
//       } else {
//         return false;
//       }
//     }

//     visited.add(course);
//     order.push(course);
//     return true;
//   }

//   for (let i = 0; i < numCourses; i++) {
//     const x = dfs(i);
//     if (!x) return [];
//   }

//   for (let i = 0; i < numCourses; i++) {
//     if (!order.includes(i)) {
//       order.push(i);
//     }
//   }

//   return order;
// }

// Yeah.... scrap it lol.

function findOrder(numCourses, prerequisites) {
  //   const graph = new Map();
  //   const visited = new Set();
  //   const visiting = new Set();
  //   const order = [];

  //   for (let i = 0; i <= numCourses; i++) {
  //     graph.set(i, []);
  //   }

  //   for (const [course, prereq] of prerequisites) {
  //     graph.set(course, [...graph.get(course), prereq]);
  //   }

  //   function dfs(course) {
  //     if (visited.has(course)) return true;
  //     if (visiting.has(course)) return false;

  //     visiting.add(course);

  //     for (const prereq of graph.get(course)) {
  //       if (!dfs(prereq)) return false;
  //     }

  //     visiting.delete(course);
  //     visited.add(course);
  //     order.push(course);
  //     return true;
  //   }

  //   for (let i = 0; i < numCourses; i++) {
  //     if (!dfs(i)) return [];
  //   }

  //   return order;

  // =================================================================

  // KAHN'S ALGORITHM

  // Yeah, ok, phew, it finally worked lol.

  // For each node, store array of nodes that depend on it (what it points to)
  const map = new Map();
  // For each  node, store the number of nodes that it depends on (what points to it)
  const invertMap = new Map();
  for (let i = 0; i < numCourses; i++) {
    map.set(i, []);
    invertMap.set(i, 0);
  }
  for (const [course, prereq] of prerequisites) {
    map.set(course, [...map.get(course), prereq]);
    invertMap.set(prereq, invertMap.get(prereq) + 1);
  }

  const order = [];
  const queue = [];
  // Add all nodes that have no dependencies
  for (const [course, count] of invertMap) {
    if (count === 0) {
      queue.push(course);
    }
  }

  while (queue.length) {
    const node = queue.shift();
    order.push(node);
    for (const next of map.get(node)) {
      invertMap.set(next, invertMap.get(next) - 1);
      if (invertMap.get(next) === 0) {
        queue.push(next);
      }
    }
  }

  //   console.log(queue.length, invertMap);

  if ([...invertMap.keys()].some((key) => invertMap.get(key) > 0)) {
    // THIS MEANS THERE WAS A CYCLE
    return [];
  }

  return order.reverse();
}

console.log("Result", findOrder(3, [[1, 0]]));
console.log(
  "Result2",
  findOrder(3, [
    [0, 1],
    [1, 2],
    [2, 0],
  ])
);
