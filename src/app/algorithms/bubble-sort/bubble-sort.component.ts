import { Component, OnInit } from '@angular/core';
import { BubbleSort } from '.';

@Component({
  selector: 'app-bubble-sort',
  templateUrl: './bubble-sort.component.html',
  styleUrls: ['./bubble-sort.component.scss']
})
export class BubbleSortComponent implements OnInit {
  sort: BubbleSort<number>;
  inputValue: string;
  unsortedArray: number[];
  sortedArray: number[];
  sortSequence: string[];
  constructor() { 
    this.inputValue = '99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0';
    this.sort = new BubbleSort();
    this.unsortedArray = [];
    this.sortedArray = [];
    this.sortSequence = ['Hello'];
  }

  ngOnInit(): void {
    this.sortArray();
  }

  sortArray(): void {
    const spacesRemoved = this.inputValue.replace(' ', '');
    const unsortedArrayAsString = spacesRemoved.split(',');
    this.unsortedArray = [];
    for(let i = 0; i < unsortedArrayAsString.length; i++) {
      this.unsortedArray.push(parseInt(unsortedArrayAsString[i]));
    }
    console.log({unsortedArray: this.unsortedArray, })
    this.sortedArray = this.sort.sort(this.unsortedArray)
    console.log({unsortedArray: this.unsortedArray, sortedArray: this.sortedArray});
  }
}
