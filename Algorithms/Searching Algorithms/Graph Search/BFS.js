const breadthFirstSearch = (graph, node) => {
  const queue = [node];
  const array = [];
  while (queue.length > 0) {
    const currentNode = queue.shift();
    array.push(currentNode);
    for (let elem of graph[currentNode]) {
      queue.push(elem);
    }
  }
  return array;
};

const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};
