import { Component, OnInit } from '@angular/core';
import { WeightedGraph } from '../weighted-graph.model';

interface GraphDisplay<T> {
  graph: WeightedGraph<T>;
  keys: string[];
  startKey: T;
  dfsRecursive: T[];
  dfsIterative: T[];
  bfsIterative: T[];
}

@Component({
  selector: 'app-graph-display',
  templateUrl: './graph-display.component.html',
  styleUrls: ['./graph-display.component.scss']
})
export class GraphDisplayComponent implements OnInit {
  graphDisplays: any[];

  constructor() { 
    this.graphDisplays = [];
  }

  ngOnInit(): void {
    this.graphDisplays.push(this.getNumberGraph());
  }

  getNumberGraph(): GraphDisplay<number> {
    let graph = new WeightedGraph<number>();
    const vertices = [0,1,2,3,4,5,6];

    for(let i = 0; i < vertices.length; i++) {
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
    ]

    for(let i = 0; i < edges.length; i++) {
      const edge = edges[i];
      graph.addEdge(edge.node1, edge.node2, edge.weight);
    }
    
    let keys = Object.keys(graph.adjacentList);
    let startKey = parseInt(keys[0]);
    let bfsIterative = graph.breadthFirstSearch(startKey);
    let dfsIterative = graph.depthFirstSearchIterative(startKey);
    let dfsRecursive = graph.depthFirstSearchRecursive(startKey);
    return {
      graph: graph,
      keys: keys,
      bfsIterative: bfsIterative,
      dfsIterative: dfsIterative,
      dfsRecursive: dfsRecursive,
      startKey: startKey,
    };
  }

  traverse(graphDisplay: GraphDisplay<any>) {
    graphDisplay.bfsIterative = graphDisplay.graph.breadthFirstSearch(graphDisplay.startKey);
    graphDisplay.dfsIterative = graphDisplay.graph.depthFirstSearchIterative(graphDisplay.startKey);
    graphDisplay.dfsRecursive = graphDisplay.graph.depthFirstSearchRecursive(graphDisplay.startKey);
  }
}
