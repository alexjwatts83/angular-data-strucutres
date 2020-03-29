import { Component, OnInit } from '@angular/core';
import { Factorial } from './factorials.model';

@Component({
  selector: 'app-factorials',
  templateUrl: './factorials.component.html',
  styleUrls: ['./factorials.component.scss']
})
export class FactorialsComponent implements OnInit {
  inputValue: number;
  answerRecursive: number;
  answerIterative: number;
  factorial: Factorial;
  factorialEquation: string[];

  constructor() {
    this.factorial = new Factorial();
    this.factorialEquation = [];
   }

  ngOnInit(): void {
    this.inputValue = 5;
    this.calculate();
  }

  calculate(): void{
    this.answerIterative = this.factorial.findFactorialIterative(this.inputValue);
    this.answerRecursive = this.factorial.findFactorialRecursive(this.inputValue);
    this.factorialEquation = [];
    this.factorialEquation.push(`${this.inputValue}!`);
    this.factorialEquation.push(`=`);
    this.factorialEquation.push(`${this.inputValue}`);
    for(let i = this.inputValue -1; i > 0; i--){
      this.factorialEquation.push(`x`);
      this.factorialEquation.push(`${i}`);
    }
  }
}
