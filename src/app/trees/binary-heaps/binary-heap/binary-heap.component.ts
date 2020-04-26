import { Component, OnInit } from '@angular/core';
import { BinaryHeap } from '../binary-heap.model';

@Component({
  selector: 'app-binary-heap',
  templateUrl: './binary-heap.component.html',
  styleUrls: ['./binary-heap.component.scss']
})

export class BinaryHeapComponent implements OnInit {
  data: HeapDisplay<number>[];
  current: HeapDisplay<number>;
  currentTabName: string;

  constructor() { }

  ngOnInit(): void {
    this.currentTabName = 'info';
    var tabNames = ['min', 'max'];
    this.data = [];

    for(let i = 0; i < tabNames.length; i++) {
      let heap: BinaryHeap<number>;
      let tabName = tabNames[i];

      if (tabName === 'min') {
        heap = new BinaryHeap<number>((x: number,y: number) => {
          let compareResult = x < y;
          return compareResult;
        });
      } else {
        heap = new BinaryHeap<number>((x: number,y: number) => {
          let compareResult = x > y;
          return compareResult;
        });
      }

      let values = [41,39,33,18,27,12,55];

      for(let i = 0; i < values.length; i++) {
        heap.insert(values[i]);
      }

      this.data.push({
        Current: heap.values,
        Previous: [],
        Heap: heap,
        InputValue: 60,
        Message: '',
        Name: tabName,
        Title: `${tabName.toLocaleUpperCase()} Binary Heap`
      });
    }

    this.enableTab('max');
  }

  insert(): void {
    this.current.Previous = [...this.current.Current];
    const value = this.current.InputValue;
    this.current.Heap.insert(value);
    this.current.Message = `Added ${value}`;
    this.current.Current = this.current.Heap.values;
  }

  extract(): void {
    this.current.Previous = [...this.current.Current];
    const value = this.current.Heap.extract();
    this.current.Message = `Extracted ${value}`;
    this.current.Current = this.current.Heap.values;
  }

  enableTab(tabName: string) {
    this.currentTabName = tabName;
    this.current = this.data.find((x: HeapDisplay<number>) => x.Name === tabName);
  }
}

interface HeapDisplay<T> {
  Heap: BinaryHeap<T>;
  Current: T[];
  Previous: T[];
  Message: string;
  InputValue: number;
  Name: string;
  Title: string;
}
