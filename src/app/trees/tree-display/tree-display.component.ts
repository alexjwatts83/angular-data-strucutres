import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tree-display',
  templateUrl: './tree-display.component.html',
  styleUrls: ['./tree-display.component.scss']
})
export class TreeDisplayComponent implements OnInit {
  @Input() nodeList: any;

  constructor() { }

  ngOnInit(): void {
  }

}
