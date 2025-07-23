function backtrack(
  path,
  options,
  isSolution,
  processSolution,
  generateCandidates
) {
  if (isSolution(path)) {
    processSolution(path);
    return;
  }

  const candidates = generateCandidates(path, options);
  for (const candidate of candidates) {
    path.push(candidate); // Make a move
    backtrack(path, options, isSolution, processSolution, generateCandidates);
    path.pop(); // Undo the move (backtrack)
  }
}

// Example usage:
function example() {
  const options = {}; // Problem-specific constraints or inputs
  function isSolution(path) {
    return path.length === 3; // Example condition (e.g., finding sequences of length 3)
  }
  function processSolution(path) {
    console.log("Solution found:", path);
  }
  function generateCandidates(path, options) {
    return [1, 2, 3, 4, 5].filter((n) => !path.includes(n)); // Example candidate generation
  }

  backtrack([], options, isSolution, processSolution, generateCandidates);
}

example();

// Ok... so we have the processSolution because it's tough to return result from backtrack... since it calls itself..

// Kinda feels like this template isn't really "usable" or helpful, except as a reminder for how this works.

// Contrast with BFS, which helpfully abstracts the shared/common logic from the problem-specific logic.
