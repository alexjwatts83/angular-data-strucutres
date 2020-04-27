export class WeightedNode<T> {
  node: T;
  weight: number;
  constructor(node: T, weight: number) {
    this.node = node;
    this.weight = weight;
  }
}

export class WeightedGraph<T>{
  adjacentList: any;

  constructor() {
    this.adjacentList = {};
  }

  addVertex(node: T) {
    if (this.adjacentList[node] === undefined) {
      this.adjacentList[node] = [];
    } else {
      console.log(`Node, '${node}' already exists`);
    }
  }

  addEdge(node1Value: T, node2Value: T, weight: number) {
    const node1 = new WeightedNode<T>(node1Value, weight);
    const node2 = new WeightedNode<T>(node2Value, weight);
    this._addEdgeToNode(node1, node2);
    this._addEdgeToNode(node2, node1);
  }

  protected _addEdgeToNode(node1: WeightedNode<T>, node2: WeightedNode<T>) {
    if (this.adjacentList[node1.node] !== undefined) {
      this.adjacentList[node1.node].push(node2);
    } else {
      console.log(`Node, '${node1}' does not exists`);
    }
  }

  removeEdge(node1Value: T, node2Value: T) {
    this._removeEdgeFromNode(node1Value, node2Value);
    this._removeEdgeFromNode(node2Value, node1Value);
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

  depthFirstSearchRecursive(node: T) {
    const result = [];
    const visited = {};

    this.dfsRecursive(node, result, visited);

    return result;
  }

  private dfsRecursive(vertex: T, result: T[], visited: any) {
    visited[vertex] = true;
    result.push(vertex);
    this.adjacentList[vertex].forEach((neighbor: WeightedNode<T>) => {
      if (!visited[neighbor.node]) {
        return this.dfsRecursive(neighbor.node, result, visited);
      }
    });
  }

  depthFirstSearchIterative(start: T) {
    const stack = [start];
    const result = [];
    const visited: any = {};
    let currentVertex: string | number | T;

    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacentList[currentVertex].forEach((neighbor: WeightedNode<T>) => {
        if (!visited[neighbor.node]) {
          visited[neighbor.node] = true;
          stack.push(neighbor.node);
        }
      });
    }
    return result;
  }

  breadthFirstSearch(start: T) {
    const queue = [start];
    const result = [];
    const visited: any = {};
    let currentVertex;
    visited[start] = true;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacentList[currentVertex].forEach((neighbor: WeightedNode<T>) => {
        if (!visited[neighbor.node]) {
          visited[neighbor.node] = true;
          queue.push(neighbor.node);
        }
      });
    }
    return result;
  }
}