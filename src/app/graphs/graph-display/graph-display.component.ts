import { Component, OnInit } from "@angular/core";

import APP_CONFIG from "../../app.config";
import { D3Node, D3Link } from "../../d3";

@Component({
  selector: "app-graph-display",
  templateUrl: "./graph-display.component.html",
  styleUrls: ["./graph-display.component.scss"],
})
export class GraphDisplayComponent implements OnInit {
  nodes: D3Node[] = [];
  links: D3Link[] = [];

  constructor() {
    const N = APP_CONFIG.N,
      getIndex = (number) => number - 1;

    /** constructing the nodes array */
    for (let i = 1; i <= N; i++) {
      this.nodes.push(new D3Node(i));
    }

    for (let i = 1; i <= N; i++) {
      for (let m = 2; i * m <= N; m++) {
        /** increasing connections toll on connecting nodes */
        this.nodes[getIndex(i)].linkCount++;
        this.nodes[getIndex(i * m)].linkCount++;

        /** connecting the nodes before starting the simulation */
        this.links.push(new D3Link(i, i * m));
      }
    }
  }

  ngOnInit() {}
}
