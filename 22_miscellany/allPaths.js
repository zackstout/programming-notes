/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const paths = [];
  function buildPath(path) {
    const lastNode = path.at(-1);
    if (lastNode === graph.length - 1) {
      paths.push(path);
      return;
    }
    const adjs = graph.at(lastNode);
    adjs.forEach((adj) => {
      buildPath([...path, adj]);
    });
  }
  buildPath([0]);
  return paths;
};
