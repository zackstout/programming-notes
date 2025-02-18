// Find shortest path from a source node to each other node in the (weighted) graph.
// Continuously pick node with smallest distance, update neighbors, add to tree.

// "Let me know if you need a more efficient version using a binary heap!"
class MinPriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(element, priority) {
    this.queue.push({ element, priority });
    this.queue.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

function dijkstra(graph, start) {
  let distances = {};

  // TODO: I guess we have to implement this?? Ok, fair enough lol

  let priorityQueue = new MinPriorityQueue();
  let previous = {};

  for (let node in graph) {
    distances[node] = Infinity;
    previous[node] = null;
  }
  distances[start] = 0;
  priorityQueue.enqueue(start, 0);

  while (!priorityQueue.isEmpty()) {
    let { element: current } = priorityQueue.dequeue();

    for (let neighbor in graph[current]) {
      let weight = graph[current][neighbor];
      let newDistance = distances[current] + weight;

      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
        previous[neighbor] = current;
        priorityQueue.enqueue(neighbor, newDistance);
      }
    }
  }

  return { distances, previous };
}

// Example usage:
function example() {
  const graph = {
    A: { B: 4, C: 2 },
    B: { A: 4, C: 5, D: 10 },
    C: { A: 2, B: 5, D: 3 },
    D: { B: 10, C: 3 },
  };

  let result = dijkstra(graph, "A");
  console.log("Shortest distances:", result.distances);
  console.log("Previous nodes:", result.previous);
}

example();
