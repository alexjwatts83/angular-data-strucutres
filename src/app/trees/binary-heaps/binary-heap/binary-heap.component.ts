import { Component, OnInit } from '@angular/core';
import { BinaryHeap } from '../binary-heap.model';

@Component({
  selector: 'app-binary-heap',
  templateUrl: './binary-heap.component.html',
  styleUrls: ['./binary-heap.component.scss']
})
export class BinaryHeapComponent implements OnInit {
  maxBinaryHeap = new BinaryHeap<number>();
  myArray: number[];
  constructor() { }

  ngOnInit(): void {
    let values = [41,39,33,18,27,12,55];
    for(let i = 0; i < values.length; i++) {
      this.maxBinaryHeap.insert(values[i]);
    }
    this.myArray = this.maxBinaryHeap.values;
  }
}
