/**
 * You are given a m×n 2D grid initialized with these three possible values:

    -1 - A water cell that can not be traversed.
    0 - A treasure chest.
    INF - A land cell that can be traversed. We use the integer 2^31 - 1 = 2147483647 to represent INF.
    Fill each land cell with the distance to its nearest treasure chest. If a land cell cannot reach a treasure chest than the value should remain INF.
 */

// Idea: BFS from all treasure chests (working backwards in a way)

const input = [
  [2147483647, -1, 0, 2147483647],
  [2147483647, 2147483647, 2147483647, -1],
  [2147483647, -1, 2147483647, -1],
  [0, -1, 2147483647, 2147483647],
];

// Aarrrrrgh frustrating one, we are soo close...we need to ignore one's we've seen....

// Hm, well, for one thing, this is structured more like a dfs right now.
// That may be the issue...
// function bfs(g, i, j, dist) {
//   if (i < 0 || i >= g.length || j < 0 || j >= g[0].length) {
//     return;
//   }
//   if (dist < g[i][j]) {
//     g[i][j] = dist;
//   }
//   if (g[i][j] === -1 || (g[i][j] === 0 && dist > 0)) {
//     return;
//   }
//   bfs(g, i + 1, j, dist + 1);
//   bfs(g, i - 1, j, dist + 1);
//   bfs(g, i, j + 1, dist + 1);
//   bfs(g, i, j - 1, dist + 1);
// }

function wallsAndGates(rooms) {
  for (let i = 0; i < rooms.length; i++) {
    for (let j = 0; j < rooms[0].length; j++) {
      if (rooms[i][j] === 0) {
        bfs(rooms, i, j);
      }
    }
  }
}

wallsAndGates(input);

// YESSS I think we got there. Use actual bfs instead of dfs, and, keep track of which we have seen.
console.log("Final", input);

function bfs(rooms, i, j) {
  const queue = [];

  queue.push([i, j, 0]);

  const seen = new Map();

  while (queue.length) {
    const [i, j, dist] = queue.shift();

    if (seen.get(`${i},${j}`)) {
      continue;
    }

    // console.log(i, j, dist);

    seen.set(`${i},${j}`, 1);

    if (i < 0 || i >= rooms.length || j < 0 || j >= rooms[0].length) {
      continue;
    }

    if (rooms[i][j] === -1 || (rooms[i][j] === 0 && dist > 0)) {
      continue;
    }

    if (dist < rooms[i][j]) {
      rooms[i][j] = dist;
    }

    queue.push([i + 1, j, dist + 1]);
    queue.push([i - 1, j, dist + 1]);
    queue.push([i, j + 1, dist + 1]);
    queue.push([i, j - 1, dist + 1]);
  }
}
