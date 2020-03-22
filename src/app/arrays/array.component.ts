import { Component, OnInit } from '@angular/core';
import { MyArray } from './arrays.model';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.scss']
})
export class ArrayComponent implements OnInit {
  inputValue: string;
  message: string;
  myArray: MyArray;
  constructor() {
    this.myArray = new MyArray();
  }

  ngOnInit(): void {
    console.log(this.inputValue);
  }

  get(): void {
    const index = parseInt(this.inputValue);
    const exists = this.myArray.get(index);
    this.message = `Value at index of, ${index}, ${exists !== undefined 
      ? ` does exist and is '${exists}'` 
      : ' does not exists :('}`;
  }

  push(): void {
    const value = parseInt(this.inputValue);
    this.myArray.push(value);
    this.message = `Added ${value}`;
  }

  getAsArray(): any[] {
    const displayArray = [];
    for (let i = 0; i < this.myArray.length; i++) {
      displayArray.push(this.myArray.get(i));;
    }
    return displayArray;
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  addTen() {
    const max = 1000;
    const len = 10;
    for(let i = 0; i < len; i++) {
      let value = this.getRandomInt(max);
      this.myArray.push(value);
    }
    this.message = `Added ${len} numbers between 1 and ${max}`;
  }

  pop() {
    if(this.myArray.length === 0) {
      return undefined;
    }
    const popped = this.myArray.pop();
    this.message = `Popped item is, ${popped}`;
  }

  shiftItems() {
    const value = parseInt(this.inputValue);
    this.myArray.shiftItems(value);
    this.message = `Shifed at index ${value}`;
  }
}
