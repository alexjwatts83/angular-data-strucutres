import { Component, OnInit } from '@angular/core';
import { Graph } from '../graphs.model';

@Component({
  selector: 'app-graph-example',
  templateUrl: './graph-example.component.html',
  styleUrls: ['./graph-example.component.scss']
})
export class GraphExampleComponent implements OnInit {
  graph: Graph<number>;
  graphString: Graph<string>;
  keys: string[];
  graphStringKeys: string[];
  graphStringTraverse: string[];

  constructor() { 
    this.graph = new Graph<number>();
    this.graphString = new Graph<string>();
    this.graphStringTraverse = [];
  }

  ngOnInit(): void {
    this.initGraph();
    this.initGraphString();
  }

  initGraph() {
    const vertices = [0,1,2,3,4,5,6];

    for(let i = 0; i < vertices.length; i++) {
      this.graph.addVertex(vertices[i]);  
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
      this.graph.addEdge(edge.node1, edge.node2);
    }
    
    // this.graph.showConnections();

    // console.log(this.graph.adjacentList);

    this.keys = Object.keys(this.graph.adjacentList);
    // console.log(this.keys);
    // //Answer:
    // // 0-->1 2 
    // // 1-->3 2 0 
    // // 2-->4 1 0 
    // // 3-->1 4 
    // // 4-->3 2 5 
    // // 5-->4 6 
    // // 6-->5
    // // this.graph.removeEdge(5, 6);
    // this.graph.removeVertex(4);

    // console.log(this.graph.adjacentList);
    this.keys = Object.keys(this.graph.adjacentList);
  }

  initGraphString() {
    const vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

    for(let i = 0; i < vertices.length; i++) {
      this.graphString.addVertex(vertices[i]);  
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
      this.graphString.addEdge(edge.node1, edge.node2);
    }
    
    this.graphString.showConnections();

    this.graphStringKeys = Object.keys(this.graphString.adjacentList);

    let key = this.graphStringKeys[1];
    key = 'F';
    this.graphStringTraverse = this.graphString.traverseDepthFirstSearchInOrder(key);
  }
}
