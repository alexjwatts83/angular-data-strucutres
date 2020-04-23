import { Component, OnInit } from '@angular/core';
import { SinglyLinkedList } from "../singly-linked-list-model";

@Component({
  selector: 'app-singly-inked-list',
  templateUrl: './singly-linked-list.component.html',
  styleUrls: ['./singly-linked-list.component.scss']
})
export class SinglyLinkedListComponent implements OnInit {
  linkedList: SinglyLinkedList<number>;
  initialValue: number;
  inputValue: number;
  message: string;
  max: number;

  constructor() {
    this.initialValue = 10;
    this.linkedList = new SinglyLinkedList<number>(this.initialValue);
    this.inputValue = this.initialValue;
    this.max = 1000;
  }

  ngOnInit(): void {
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  append(): void {
    this.linkedList.append(this.inputValue);
    this.message = `Append '${this.inputValue}'`;
  }

  appendRandom(): void {
    this.inputValue = this.getRandomInt(this.max);
    this.linkedList.append(this.inputValue);
    this.message = `Append Random number '${this.inputValue}' between ${this.max}`;
  }

  prepend(): void {
    this.linkedList.prepend(this.inputValue);
    this.message = `Prepend '${this.inputValue}'`;
  }

  prependRandom(): void {
    this.inputValue = this.getRandomInt(this.max);
    this.linkedList.prepend(this.inputValue);
    this.message = `Prepend Random number '${this.inputValue}' between ${this.max}`;
  }
}
