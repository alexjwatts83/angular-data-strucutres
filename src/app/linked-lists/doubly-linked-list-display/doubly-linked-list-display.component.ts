import { Component, OnInit, Input } from '@angular/core';
import { DoublyLinkedListNode } from '../linked-lists.model';

@Component({
  selector: 'app-doubly-linked-list-display',
  templateUrl: './doubly-linked-list-display.component.html',
  styleUrls: ['./doubly-linked-list-display.component.scss']
})
export class DoublyLinkedListDisplayComponent<T> implements OnInit {
  @Input() head: DoublyLinkedListNode<T>;
  @Input() tail: DoublyLinkedListNode<T>;
  @Input() length: number;
  @Input() alertType: string;

  constructor() { }

  ngOnInit(): void {
  }

  getNodeValueText<T>(node: DoublyLinkedListNode<T>) {
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
