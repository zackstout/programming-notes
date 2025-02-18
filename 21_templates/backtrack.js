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

  let candidates = generateCandidates(path, options);
  for (let candidate of candidates) {
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
