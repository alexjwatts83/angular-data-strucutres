import { Component, OnInit, Input } from '@angular/core';
import { Queue } from '../queue.model';
import { SimpleNode } from 'src/app/shared';

@Component({
  selector: 'app-queue-display',
  templateUrl: './queue-display.component.html',
  styleUrls: ['./queue-display.component.scss']
})
export class QueueDisplayComponent implements OnInit {
  @Input() alertType: string;
  @Input() queue: Queue<number>;
  
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

  queueToArray(): any[] {
    const displayArray = [];
    var currentNode = this.queue.first;
    while (currentNode !== null) {
      displayArray.push(currentNode);
      currentNode = currentNode.next;
    }
    return displayArray;
  }
}
