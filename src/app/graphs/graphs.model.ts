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
    this._addEdgeToNode(node1, node2);
    this._addEdgeToNode(node2, node1);
  }

  private _addEdgeToNode(node1: T, node2: T) {
    if (this.adjacentList[node1] !== undefined) {
      this.adjacentList[node1].push([node2]);
    } else {
      console.log(`Node, '${node1}' does not exists`);
    }
  }

  removeEdge(node1: T, node2: T) {
    this._removeEdgeFromNode(node1, node2);
    this._removeEdgeFromNode(node2, node1);
  }

  private _removeEdgeFromNode(node1: T, node2: T) {
    if (this.adjacentList[node1] !== undefined) {
      let index = this.adjacentList[node1].findIndex((x: T) => x == node2);
      if (index >= 0) {
        this.adjacentList[node1].splice(index, 1);
      } else {
        console.log(`Edge, '${node1}' to '${node2}' does not exists`);
      }
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