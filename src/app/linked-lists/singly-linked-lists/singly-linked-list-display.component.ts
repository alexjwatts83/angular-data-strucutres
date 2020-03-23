import { Component, OnInit, Input } from '@angular/core';
import { LinkedListNode } from '../linked-lists.model';

@Component({
  selector: 'app-singly-linked-list-display',
  templateUrl: './singly-linked-list-display.component.html',
  styleUrls: ['./singly-linked-list-display.component.scss']
})
export class SinglyLinkedListDisplayComponent<T> implements OnInit {
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

  linkedListsToArray(): any[] {
    const displayArray = [];
    var currentNode = this.head;
    while (currentNode !== null) {
      displayArray.push(currentNode);
      currentNode = currentNode.next;
    }
    return displayArray;
  }
}
