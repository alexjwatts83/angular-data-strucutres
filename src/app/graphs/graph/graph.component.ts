import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  showExample: boolean;
  showInfo: boolean;
  showWeightedExample: boolean;

  constructor() { }

  ngOnInit(): void {
    this.showWeightedClick();
  }

  showExampleClick() {
    this.showExample = true;
    this.showInfo = false;
    this.showWeightedExample = false;
  }

  showInfoClick() {
    this.showExample = false;
    this.showInfo = true;
    this.showWeightedExample =false
  }

  showWeightedClick() {
    this.showWeightedExample = true;
    this.showExample = false;
    this.showInfo = false;
  }
}
