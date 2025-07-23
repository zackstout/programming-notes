// https://github.com/gutty333/Hard-Programming-Challenges/blob/master/13_VertexCovering.cpp

// Wait, don't we just loop through edges, and ask, is at least one of my endpoints represented in the candidate set?
// And if we ever say "no", the answer is "no"?

function isVertexCover([vertices, edges, candidates]) {
  let result = true;

  edges = edges.slice(1, edges.length - 1).split(",");
  candidates = candidates.slice(1, candidates.length - 1).split(",");

  for (const edge of edges) {
    const [x, y] = edge.split("-");

    if (!candidates.includes(x) && !candidates.includes(y)) {
      return false;
    }
  }
  return result;
}

console.log(isVertexCover(["(A,B,C,D)", "(A-B,A-D,B-D,A-C)", "(A,B)"]));

console.log(isVertexCover(["(A,B,C,D)", "(A-B,A-D,B-D,A-C)", "(C,B)"]));
