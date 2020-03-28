import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  showExample: boolean;
  showInfo: boolean;
  
  constructor() { }

  ngOnInit(): void {
    this.showExample = false;
    this.showInfo = true;
  }

  showExampleClick() {
    this.showExample = true;
    this.showInfo = false;
  }

  showInfoClick() {
    this.showExample = false;
    this.showInfo = true;
  }
}
