import { Component, OnInit } from '@angular/core';
import { 
  BubbleSort,
  SortAlgorithm,
  SelectionSort,
  InsertionSort,
  MergeSort,
  QuickSort
} from './models';

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
          'Compares adjacent numbers and swaps if left is greater than right. The highest number bubbles up to the top.',
          'Do not use, mostly used to teach sort. Not very efficient',
        ],
        sortedArray: [],
        sorter: new BubbleSort<number>()
      },
      {
        name: 'Selection Sort',
        description: [
          'Finds min for the unsorted partion of the array. When it gets to the end. It replaces the min value at start of the unsorted array.',
          'Do not use, mostly used to teach sort. Not very efficient',
        ],
        sortedArray: [],
        sorter: new SelectionSort<number>()
      },
      {
        name: 'Insertion Sort',
        description: [
          'Sort as you go, you travese the array until you find a number less than the number you first looked at then sort it accordingly.',
          'This could mean either adding to the start or somewhere in between the section which is already sorted.',
          'Good for when there are a few items or items are mostly sorted, uses little space',
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
          'Divide and Conquer. ADD BETTER DESCRIPTION',
          'Really good because of divide and conquer. Best, average and worst case if O(n log(n)).',
          'Trade off being a space complexity of O(n)',
        ],
        sortedArray: [],
        sorter: new MergeSort<number>()
      },
      {
        name: 'Quick Sort',
        description: [
          'Divide and Conquer. ADD BETTER DESCRIPTION',
          'Really good because of divide and conquer. Best and average worst case if O(n log(n))',
          'Worst case of O(n ^ 2) if the wrong pivot is chosen',
          'Space complexity of O(log(n))',
        ],
        sortedArray: [],
        sorter: new QuickSort<number>()
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
