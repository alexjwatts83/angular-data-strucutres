export class Graph<T> {
  numberOfNodes: number;
  adjacentList: any;

  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  addVertex(node: T) {
    if (this.adjacentList[node] === undefined) {
      this.adjacentList[node] = [];
      this.numberOfNodes++;
    } else {
      console.log(`Node, '${node}' already exists`);
    }
  }

  addEdge(node1: T, node2: T) {
    this.addEdgeToNode(node1, node2);
    this.addEdgeToNode(node2, node1);
  }

  addEdgeToNode(node1: T, node2: T) {
    if (this.adjacentList[node1] !== undefined) {
      this.adjacentList[node1].push([node2]);
    } else {
      console.log(`Node, '${node1}' does not exists`);
    }
  }

  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "-->" + connections);
    }
  }
} 