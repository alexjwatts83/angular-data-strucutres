import { Component, OnInit } from '@angular/core';
import { Fibonacci } from './fibonacci.model';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.scss']
})
export class FibonacciComponent implements OnInit {
  inputValue: number;
  answerRecursive: number;
  answerIterative: number;
  anwserCached: number;

  fibonacci: Fibonacci;
  fibonacciEquation: string[];

  headers: number[] = [];
  bodyActual: number[] = [];
  bodyIterative: number[] = [];
  bodyRecursive: number[] = [];
  bodyRecursiveCached: number[] = [];

  constructor() {
    this.fibonacci = new Fibonacci();
    this.fibonacciEquation = [];
    this.bodyActual = [0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765];
    for(let i = 0; i <= this.bodyActual.length-1; i++) {
      this.headers.push(i);
      this.fibonacci.resetCounts();
      this.bodyIterative.push(this.fibonacci.fibonacciIterative(i));
      this.bodyRecursive.push(this.fibonacci.fibonacciRecursive(i));
      this.bodyRecursiveCached.push(this.fibonacci.fibonacciRecursiveCached(i));
    }
   }

  ngOnInit(): void {
    this.inputValue = 10;
    this.calculate(false);
  }

  calculate(doLog: boolean): void{
    // this.fibonacci.doLog = doLog;
    this.fibonacci.doLog = false;
    this.fibonacci.resetCounts();
    this.answerIterative = this.fibonacci.fibonacciIterative(this.inputValue);
    this.answerRecursive = this.fibonacci.fibonacciRecursive(this.inputValue);
    this.anwserCached = this.fibonacci.fibonacciRecursiveCached(this.inputValue);
    this.fibonacci.doLog = false;
  }
}
