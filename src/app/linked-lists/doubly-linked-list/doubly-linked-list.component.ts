import { Component, OnInit } from '@angular/core';
import { DoublyLinkedList } from '../linked-lists.model';

@Component({
  selector: 'app-doubly-linked-list',
  templateUrl: './doubly-linked-list.component.html',
  styleUrls: ['./doubly-linked-list.component.scss']
})
export class DoublyLinkedListComponent implements OnInit {
  linkedList: DoublyLinkedList<number>;
  initialValue: number;
  inputValue: number;
  message: string;
  constructor() { 
    this.initialValue = 10;
    this.linkedList = new DoublyLinkedList<number>(this.initialValue);
    this.inputValue = this.initialValue;
  }

  ngOnInit(): void {
  }

  append(): void {
    this.linkedList.append(this.inputValue);
    this.message = `Append '${this.inputValue}'`;
  }

  prepend(): void {
    this.linkedList.prepend(this.inputValue);
    this.message = `Prepend '${this.inputValue}'`;
  }
}
