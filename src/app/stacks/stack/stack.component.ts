import { Component, OnInit } from '@angular/core';
import { Stack } from '../stacks.model';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent implements OnInit {
  stack: Stack<number>;
  initialValue: number;
  inputValue: number;
  message: string;
  max: number;

  constructor() {
    this.initialValue = 10;
    this.stack = new Stack<number>();
    this.inputValue = this.initialValue;
    this.max = 1000;
   }

  ngOnInit(): void {
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  push(): void {
    this.stack.push(this.inputValue);
    this.message = `Push '${this.inputValue}'`;
  }

  pushRandom(): void {
    this.inputValue = this.getRandomInt(this.max);
    this.stack.push(this.inputValue);
    this.message = `Push Random number '${this.inputValue}' between ${this.max}`;
  }

  pop(): void {
    const popped = this.stack.pop();
    this.message = `Popped '${popped === null ? 'Nothing' : popped.value }'`;
  }
}
