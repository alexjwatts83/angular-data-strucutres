// import {
//   PriorityQueue,
//   PriorityQueueNode,
// } from "../trees/priority-queues/priority-queue-model";

class PriorityQueue<T>{
  values: {val: T, priority: number}[];
  constructor(){
    this.values = [];
  }
  enqueue(val: T, priority: number) {
    this.values.push({val, priority});
    this.sort();
  };
  dequeue() {
    return this.values.shift();
  };
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  };
}

export class WeightedNode<T> {
  node: T;
  weight: number;
  constructor(node: T, weight: number) {
    this.node = node;
    this.weight = weight;
  }
}

export class WeightedGraph<T> {
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

  dijkstra(start: T, finish: T): T[] {
    const nodes = new PriorityQueue<T>();
    const distances = {};
    const previous = {};
    let path: T[] = []; //to return at end
    let smallest;
    //build up initial state
    for (let vertex in this.adjacentList) {
      let key: any = vertex;
      if (key === start) {
        distances[vertex] = 0;
        nodes.enqueue(key, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(key, Infinity);
      }
      previous[vertex] = null;
    }
    // as long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        //WE ARE DONE
        //BUILD UP PATH TO RETURN AT END
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacentList[smallest]) {
          //find neighboring node
          let nextNode = this.adjacentList[smallest][neighbor];
          //calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            //updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            //updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            //enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}
