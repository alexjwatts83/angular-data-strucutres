import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  showExample: boolean;
  showInfo: boolean;
  showDisplay: boolean;
  
  constructor() { }

  ngOnInit(): void {
    this.showExampleClick();
  }

  showExampleClick() {
    this.showExample = true;
    this.showInfo = false;
    this.showDisplay = false;
  }

  showInfoClick() {
    this.showExample = false;
    this.showInfo = true;
    this.showDisplay = false;
  }

  showDisplayClick() {
    this.showExample = false;
    this.showInfo = false;
    this.showDisplay = true;
  }
}
