import { Component, OnInit } from '@angular/core';
import { ReverString } from './reverse-string';

@Component({
  selector: 'app-reverse-string',
  templateUrl: './reverse-string.component.html',
  styleUrls: ['./reverse-string.component.scss']
})
export class ReverseStringComponent implements OnInit {
  inputValue: string;
  answerRecursive: string;
  answerIterative: string;
  reverseString: ReverString;
  constructor() { }

  ngOnInit(): void {
    this.inputValue = 'Reverse Strings!';
    this.reverseString = new ReverString();
    this.reverse();
  }

  reverse(): void {
    this.answerIterative = this.reverseString.reverseIterative(this.inputValue);
    this.answerRecursive = this.reverseString.reverseRecursive(this.inputValue);
  }
}
