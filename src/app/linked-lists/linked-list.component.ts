import { Component, OnInit } from '@angular/core';
import { SinglyLinkedList, LinkedListNode } from './linked-lists.model';

@Component({
  selector: 'app-linked-list',
  templateUrl: './linked-list.component.html',
  styleUrls: ['./linked-list.component.scss']
})
export class LinkedListComponent implements OnInit {
  linkedList: SinglyLinkedList<number>;
  initialValue: number;
  inputValue: number;
  message: string;

  constructor() {
    this.initialValue = 10;
    this.linkedList = new SinglyLinkedList<number>(this.initialValue);
    this.inputValue = this.initialValue;
  }

  ngOnInit(): void {
  }

  append(): void {
    this.linkedList.append(this.inputValue);
    this.message = `Append '${this.inputValue}'`;
    console.log(this.linkedList.traverseLinkedList(0));
  }

  prepend(): void {
    this.linkedList.prepend(this.inputValue);
    this.message = `Prepend '${this.inputValue}'`;
  }
}
