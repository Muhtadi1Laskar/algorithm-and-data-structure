const depthFirstSearch = (graph, node) => {
  const stack = [node];
  const array = [];
  while (stack.length > 0) {
    const currentNode = stack.pop();
    array.push(currentNode);
    for (let elem of graph[currentNode]) {
      stack.push(elem);
    }
  }
  return array;
};

const DFSRecursion = (graph, node) => {
  console.log(node);
  for (let elem of graph[node]) {
    DFSRecursion(graph, elem);
  }
};

const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};
