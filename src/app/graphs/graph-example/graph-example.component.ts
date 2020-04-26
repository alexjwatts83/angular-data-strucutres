import { Component, OnInit } from '@angular/core';
import { Graph } from '../graphs.model';

interface GraphDisplay<T> {
  graph: Graph<T>;
  keys: string[];
  startKey: T;
  dfsRecursive: T[];
  dfsIterative: T[];
  bfsIterative: T[];
}

@Component({
  selector: 'app-graph-example',
  templateUrl: './graph-example.component.html',
  styleUrls: ['./graph-example.component.scss']
})

export class GraphExampleComponent implements OnInit {
  graphDisplays: any[];

  constructor() { 
    this.graphDisplays = [];
  }

  ngOnInit(): void {
    this.graphDisplays.push(this.getNumberGraph());
    this.graphDisplays.push(this.getStringGraph());
  }

  getNumberGraph(): GraphDisplay<number> {
    let graph = new Graph<number>();
    const vertices = [0,1,2,3,4,5,6];

    for(let i = 0; i < vertices.length; i++) {
      graph.addVertex(vertices[i]);  
    }

    const edges = [
      { node1: 3, node2: 1 },
      { node1: 3, node2: 4 },
      { node1: 4, node2: 2 },
      { node1: 4, node2: 5 },
      { node1: 1, node2: 2 },
      { node1: 1, node2: 0 },
      { node1: 0, node2: 2 },
      { node1: 6, node2: 5 },
    ]

    for(let i = 0; i < edges.length; i++) {
      const edge = edges[i];
      graph.addEdge(edge.node1, edge.node2);
    }
    let keys = Object.keys(graph.adjacentList);
    let startKey = parseInt(keys[0]);
    return {
      graph: graph,
      keys: keys,
      bfsIterative: graph.breadthFirstSearch(startKey),
      dfsIterative: graph.depthFirstSearchIterative(startKey),
      dfsRecursive: graph.depthFirstSearchRecursive(startKey),
      startKey: startKey,
    };
  }

  getStringGraph(): GraphDisplay<string> {
    let graph = new Graph<string>();
    const vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

    for(let i = 0; i < vertices.length; i++) {
      graph.addVertex(vertices[i]);  
    }

    const edges = [
      { node1: 'A', node2: 'B' },
      { node1: 'A', node2: 'C' },
      { node1: 'B', node2: 'D' },
      { node1: 'C', node2: 'E' },
      { node1: 'D', node2: 'E' },
      { node1: 'D', node2: 'F' },
      { node1: 'E', node2: 'F' },
    ]

    for(let i = 0; i < edges.length; i++) {
      const edge = edges[i];
      graph.addEdge(edge.node1, edge.node2);
    }
    let keys = Object.keys(graph.adjacentList);
    let startKey = keys[0];
    return {
      graph: graph,
      keys: keys,
      bfsIterative: graph.breadthFirstSearch(startKey),
      dfsIterative: graph.depthFirstSearchIterative(startKey),
      dfsRecursive: graph.depthFirstSearchRecursive(startKey),
      startKey: startKey,
    };
  }
}
