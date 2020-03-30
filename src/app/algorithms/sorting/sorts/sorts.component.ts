import { Component, OnInit } from '@angular/core';
import { BubbleSort, SortAlgorithm, SelectionSort, InsertionSort } from './models';
import { MergeSort } from './models/merge-sort.model';

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
  sortDisplays: { name: string; description: string[]; sortedArray: number[]; sorter: SortAlgorithm<number> }[];
  sortDisplays2: { name: string; description: string[]; sortedArray: number[]; sorter: SortAlgorithm<number> }[];

  constructor() { 
    this.inputValue = '99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0, 8, 300, 55, 3, 16';
    this.unsortedArray = [];
    this.inputMax = 200;
    this.inputMin = 0;
    this.inputLength = 15;
    this.sortDisplays = [];
    this.sortDisplays.push(
      {
        name: 'Bubble Sort',
        description: [
          'Compares adjacent numbers and swaps if left is greater than right. The highest number bubbles up to the top.'
        ],
        sortedArray: [],
        sorter: new BubbleSort<number>()
      },
      {
        name: 'Selection Sort',
        description: [
          'Finds min for the unsorted partion of the array. When it gets to the end. It replaces the min value at start of the unsorted array.'
        ],
        sortedArray: [],
        sorter: new SelectionSort<number>()
      },
      {
        name: 'Insertion Sort',
        description: [
          'Sort as you go, you travese the array until you find a number less than the number you first looked at then sort it accordingly.',
          'This could mean either adding to the start or somewhere in between the section which is already sorted.'          
        ],
        sortedArray: [],
        sorter: new InsertionSort<number>()
      },
    );
    this.sortDisplays2 = [];
    this.sortDisplays2.push(
      {
        name: 'Merge Sort',
        description: [
          'Divide and Conquer.'
        ],
        sortedArray: [],
        sorter: new MergeSort<number>()
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

    for(let i = 0; i < this.sortDisplays2.length; i++) {
      this.sortDisplays2[i].sortedArray = this.sortDisplays2[i].sorter.sort(this.unsortedArray);
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
