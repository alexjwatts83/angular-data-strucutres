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
    for(let i = 0; i < 10; i++) {
      let value = this.getRandomInt(max);
      this.myArray.push(value);
    }
  }
}
