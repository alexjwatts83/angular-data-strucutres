import { Component, OnInit } from '@angular/core';
import { SinglyLinkedList } from "../SinglyLinkedList";

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
  }

  prepend(): void {
    this.linkedList.prepend(this.inputValue);
    this.message = `Prepend '${this.inputValue}'`;
  }
}
