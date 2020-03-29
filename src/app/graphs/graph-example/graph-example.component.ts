import { Component, OnInit } from '@angular/core';
import { Graph } from '../graphs.model';

@Component({
  selector: 'app-graph-example',
  templateUrl: './graph-example.component.html',
  styleUrls: ['./graph-example.component.scss']
})
export class GraphExampleComponent implements OnInit {
  graph: Graph<number>;
  constructor() { 
    this.graph = new Graph<number>();
  }

  ngOnInit(): void {
    this.initGraph()
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
    this.graph.showConnections();
    //Answer:
    // 0-->1 2 
    // 1-->3 2 0 
    // 2-->4 1 0 
    // 3-->1 4 
    // 4-->3 2 5 
    // 5-->4 6 
    // 6-->5
  }
}
