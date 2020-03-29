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
  inputMin: number;
  inputMax: number;
  inputLength: number;

  constructor() { 
    this.inputValue = '99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0, 8, 300, 55, 3';
    this.sort = new BubbleSort();
    this.unsortedArray = [];
    this.sortedArray = [];
    this.sortSequence = [];
    this.inputMax = 200;
    this.inputMin = 0;
    this.inputLength = 15;
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

    this.sortedArray = this.sort.sort(this.unsortedArray)
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  createArray(): void {
    this.inputValue = '';
    for(let i = 0; i < this.inputLength; i++) {
      let value = this.getRandomInt(this.inputMax);
      this.inputValue = this.inputValue + value + ', ';
    }
    this.inputValue = this.inputValue.substring(0, this.inputValue.length - 2);
  }
}
