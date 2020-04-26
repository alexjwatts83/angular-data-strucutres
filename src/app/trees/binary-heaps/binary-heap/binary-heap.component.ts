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
  prevArray: number[];
  message: string;
  inputValue: number;
  showMax: boolean;
  showInfo: boolean;
  showMin: boolean;

  constructor() { 
    this.showInfo = false;
    this.showMax = true;
    this.showMin = false;
  }

  ngOnInit(): void {
    let values = [41,39,33,18,27,12,55,5];
    for(let i = 0; i < values.length; i++) {
      this.maxBinaryHeap.insert(values[i]);
    }
    this.myArray = this.maxBinaryHeap.values;
    this.message = '';
    this.inputValue = 60;
    this.prevArray = [];
  }

  insert(): void {
    this.prevArray = [...this.myArray];
    const value = this.inputValue;
    this.maxBinaryHeap.insert(value);
    this.message = `Added ${value}`;
    this.myArray = this.maxBinaryHeap.values;
  }

  enableTab(tabName: string) {
    switch (tabName) {
      case 'max':
        this.showMax = true;
        this.showMin = false;
        this.showInfo = false;
        break;
      case 'min':
        this.showMax = false;
        this.showMin = true;
        this.showInfo = false;
        break;
      case 'info':
        this.showMax = false;
        this.showMin = false;
        this.showInfo = true;
        break;
      default:
        break;
    }
  }
}
