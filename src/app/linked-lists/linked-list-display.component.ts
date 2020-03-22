import { Component, OnInit, Input } from '@angular/core';
import { LinkedListNode } from './linked-lists.model';

@Component({
  selector: 'app-linked-list-display',
  templateUrl: './linked-list-display.component.html',
  styleUrls: ['./linked-list-display.component.scss']
})
export class LinkedListDisplayComponent<T> implements OnInit {
  @Input() head: LinkedListNode<T>;
  @Input() tail: LinkedListNode<T>;
  @Input() length: number;
  @Input() alertType: string;

  constructor() { }

  ngOnInit(): void {
  }

  getNodeValueText<T>(node: LinkedListNode<T>) {
    if(!node) {
      return 'NULL';
    }
    return node.value;
  }
}
