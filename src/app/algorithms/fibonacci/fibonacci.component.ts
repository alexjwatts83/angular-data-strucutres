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
  fibonacci: Fibonacci;
  fibonacciEquation: string[];

  headers: number[] = [];
  bodyActual: number[] = [];
  bodyIterative: number[] = [];
  bodyRecursive: number[] = [];

  constructor() {
    this.fibonacci = new Fibonacci();
    this.fibonacciEquation = [];
    this.bodyActual = [0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765];
    for(let i = 0; i <= this.bodyActual.length-1; i++) {
      this.headers.push(i);
      this.bodyIterative.push(this.fibonacci.fibonacciIterative(i));
      this.bodyRecursive.push(this.fibonacci.fibonacciRecursive(i));
    }
   }

  ngOnInit(): void {
    this.inputValue = 10;
    this.calculate();
  }

  calculate(): void{
    this.answerIterative = this.fibonacci.fibonacciIterative(this.inputValue);
    this.answerRecursive = this.fibonacci.fibonacciRecursive(this.inputValue);
    // this.factorialEquation = [];
    // this.factorialEquation.push(`${this.inputValue}!`);
    // this.factorialEquation.push(`=`);
    // this.factorialEquation.push(`${this.inputValue}`);
    // for(let i = this.inputValue -1; i > 0; i--){
    //   this.factorialEquation.push(`x`);
    //   this.factorialEquation.push(`${i}`);
    // }
  }
}
