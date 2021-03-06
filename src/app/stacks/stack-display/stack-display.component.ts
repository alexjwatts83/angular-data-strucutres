import { Component, OnInit, Input } from '@angular/core';
import { Stack } from '../stacks.model';
import { SimpleNode } from '../../shared';

@Component({
  selector: 'app-stack-display',
  templateUrl: './stack-display.component.html',
  styleUrls: ['./stack-display.component.scss']
})
export class StackDisplayComponent implements OnInit {
  @Input() alertType: string;
  @Input() stack: Stack<number>;
  
  constructor() { }

  ngOnInit(): void {
  }

  getNodeValueText<T>(node: SimpleNode<T>) {
    console.log('node', node);
    if (node === null) {
      return 'NULL';
    }
    return node.value;
  }

  getNextNodeValueText<T>(node: SimpleNode<T>) {
    console.log('node', node);
    if (node === null) {
      return 'NULL';
    }
    if (node.next === null) {
      return 'NULL';
    }
    return node.next.value;
  }

  stackToArray(): any[] {
    const displayArray = [];
    var currentNode = this.stack.top;
    while (currentNode !== null) {
      displayArray.push(currentNode);
      currentNode = currentNode.next;
    }
    return displayArray;
  }
}
