class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }
    addVertex(node) {
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }
    addEdge(nodeOne, nodeTwo) {
        this.adjacentList[nodeOne].push(nodeTwo);
        this.adjacentList[nodeTwo].push(nodeOne);
    }
}

