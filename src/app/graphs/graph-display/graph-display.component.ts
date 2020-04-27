import { Component, OnInit } from "@angular/core";
import { WeightedGraph } from "../weighted-graph.model";

interface GraphDisplay<T> {
  graph: WeightedGraph<T>;
  keys: string[];
  startKey: T;
  dfsRecursive: T[];
  dfsIterative: T[];
  bfsIterative: T[];
  dijkstra: T[];
  dijkstraStart: T;
  dijkstraEnd: T;
}

@Component({
  selector: "app-graph-display",
  templateUrl: "./graph-display.component.html",
  styleUrls: ["./graph-display.component.scss"],
})
export class GraphDisplayComponent implements OnInit {
  graphDisplays: any[];

  constructor() {
    this.graphDisplays = [];
  }

  ngOnInit(): void {
    this.graphDisplays.push(this.getNumberGraph());
    // this.graphDisplays.push(this.getStringGraph());
  }

  getNumberGraph(): GraphDisplay<number> {
    let graph = new WeightedGraph<number>();
    const vertices = [0, 1, 2, 3, 4, 5, 6];

    for (let i = 0; i < vertices.length; i++) {
      graph.addVertex(vertices[i]);
    }

    const edges = [
      { node1: 3, node2: 1, weight: 1 },
      { node1: 3, node2: 4, weight: 2 },
      { node1: 4, node2: 2, weight: 3 },
      { node1: 4, node2: 5, weight: 3 },
      { node1: 1, node2: 2, weight: 1 },
      { node1: 1, node2: 0, weight: 3 },
      { node1: 0, node2: 2, weight: 4 },
      { node1: 6, node2: 5, weight: 5 },
    ];

    for (let i = 0; i < edges.length; i++) {
      const edge = edges[i];
      graph.addEdge(edge.node1, edge.node2, edge.weight);
    }

    let keys = Object.keys(graph.adjacentList);
    let startKey = parseInt(keys[0]);
    let endKey = parseInt(keys[keys.length - 1]);
    let bfsIterative = graph.breadthFirstSearch(startKey);
    let dfsIterative = graph.depthFirstSearchIterative(startKey);
    let dfsRecursive = graph.depthFirstSearchRecursive(startKey);
    let dijkstra = graph.dijkstra(startKey, endKey);
    console.log({
      startKey: startKey,
      endKey: endKey
    });
    return {
      graph: graph,
      keys: keys,
      bfsIterative: bfsIterative,
      dfsIterative: dfsIterative,
      dfsRecursive: dfsRecursive,
      startKey: startKey,
      dijkstraEnd: endKey,
      dijkstra: dijkstra,
      dijkstraStart: startKey,
    };
  }

  getStringGraph(): GraphDisplay<string> {
    let graph = new WeightedGraph<string>();
    // const vertices = ['A','B','C','D','E','F'];;

    // for(let i = 0; i < vertices.length; i++) {
    //   graph.addVertex(vertices[i]);
    // }

    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addVertex("D");
    graph.addVertex("E");
    graph.addVertex("F");
    graph.addVertex("G");

    graph.addEdge("A", "B", 4);
    graph.addEdge("A", "C", 2);
    graph.addEdge("B", "E", 3);
    graph.addEdge("C", "D", 2);
    graph.addEdge("C", "F", 4);
    graph.addEdge("D", "E", 3);
    graph.addEdge("D", "F", 1);
    graph.addEdge("E", "F", 1);
    graph.addEdge("F", "G", 1);

    let keys = Object.keys(graph.adjacentList);
    let startKey = keys[0];
    let bfsIterative = graph.breadthFirstSearch(startKey);
    let dfsIterative = graph.depthFirstSearchIterative(startKey);
    let dfsRecursive = graph.depthFirstSearchRecursive(startKey);
    let endKey = keys[keys.length - 1];
    let dijkstra = graph.dijkstra(startKey, endKey);
    return {
      graph: graph,
      keys: keys,
      bfsIterative: bfsIterative,
      dfsIterative: dfsIterative,
      dfsRecursive: dfsRecursive,
      startKey: startKey,
      dijkstraEnd: endKey,
      dijkstra: dijkstra,
      dijkstraStart: startKey,
    };
  }

  traverse(graphDisplay: GraphDisplay<any>) {
    graphDisplay.bfsIterative = graphDisplay.graph.breadthFirstSearch(
      graphDisplay.startKey
    );
    graphDisplay.dfsIterative = graphDisplay.graph.depthFirstSearchIterative(
      graphDisplay.startKey
    );
    graphDisplay.dfsRecursive = graphDisplay.graph.depthFirstSearchRecursive(
      graphDisplay.startKey
    );
  }

  dijkstra(graphDisplay: GraphDisplay<any>) {
    let dfsRecursive = [...graphDisplay.graph.dijkstra(
      graphDisplay.dijkstraStart,
      graphDisplay.dijkstraEnd
    )];

    console.log({
      dijkstraStart: graphDisplay.dijkstraStart,
      dijkstraEnd: graphDisplay.dijkstraEnd,
      dfsRecursive: dfsRecursive
    });

    graphDisplay.dijkstra = [];
    graphDisplay.dijkstra = dfsRecursive;
  }
}
