import { Component, OnInit } from '@angular/core';
import { BubbleSort, SortAlgorithm, SelectionSort, InsertionSort } from './models';

@Component({
  selector: 'app-sorts',
  templateUrl: './sorts.component.html',
  styleUrls: ['./sorts.component.scss']
})
export class SortsComponent implements OnInit {
  inputValue: string;
  unsortedArray: number[];
  inputMin: number;
  inputMax: number;
  inputLength: number;
  sortDisplays: { name: string; sortedArray: number[]; sorter: SortAlgorithm<number> }[];

  constructor() { 
    this.inputValue = '99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0, 8, 300, 55, 3';
    this.unsortedArray = [];
    this.inputMax = 200;
    this.inputMin = 0;
    this.inputLength = 15;
    this.sortDisplays = [];
    this.sortDisplays.push(
      {
        name: 'Bubble Sort',
        sortedArray: [],
        sorter: new BubbleSort<number>()
      },
      {
        name: 'Selection Sort',
        sortedArray: [],
        sorter: new SelectionSort<number>()
      },
      {
        name: 'Insertion Sort',
        sortedArray: [],
        sorter: new InsertionSort<number>()
      },
    );
  }

  ngOnInit(): void {
    this.sortArray();
  }

  transformInputValueIntoArray(rawText: string): number[] {
    const spacesRemoved = rawText.replace(' ', '');
    const unsortedArrayAsString = spacesRemoved.split(',');
    const unsortedArray = [];

    for(let i = 0; i < unsortedArrayAsString.length; i++) {
      unsortedArray.push(parseInt(unsortedArrayAsString[i]));
    }

    return unsortedArray;
  }

  sortArray(): void {
    this.unsortedArray = this.transformInputValueIntoArray(this.inputValue);

    for(let i = 0; i < this.sortDisplays.length; i++) {
      this.sortDisplays[i].sortedArray = this.sortDisplays[i].sorter.sort(this.unsortedArray);
    }
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  createArray(): void {
    this.inputValue = '';
    const addedNumbers = new Set();
    while(addedNumbers.size < this.inputLength) {
      let value = this.getRandomInt(this.inputMax);
      if (addedNumbers.has(value)) {
        continue;
      }
      addedNumbers.add(value);
      this.inputValue = this.inputValue + value + ', ';
    }
    this.inputValue = this.inputValue.substring(0, this.inputValue.length - 2);
  }
}
