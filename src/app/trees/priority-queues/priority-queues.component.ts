import { Component, OnInit } from '@angular/core';
import { PriorityQueue, PriorityQueueNode } from './priority-queue-model';

@Component({
  selector: 'app-priority-queues',
  templateUrl: './priority-queues.component.html',
  styleUrls: ['./priority-queues.component.scss']
})
export class PriorityQueuesComponent implements OnInit {
  data: HeapDisplay<number>[];
  current: HeapDisplay<number>;
  currentTabName: string;

  constructor() { }

  ngOnInit(): void {
    this.currentTabName = 'info';
    var tabNames = ['min', 'max'];
    this.data = [];

    for(let i = 0; i < tabNames.length; i++) {
      let heap: PriorityQueue<number>;
      let tabName = tabNames[i];

      if (tabName === 'min') {
        heap = new PriorityQueue<number>((x: PriorityQueueNode<number>,y: PriorityQueueNode<number>) => {
          let compareResult = x.priority < y.priority;
          return compareResult;
        });
      } else {
        heap = new PriorityQueue<number>((x: PriorityQueueNode<number>,y: PriorityQueueNode<number>) => {
          let compareResult = x.priority > y.priority;
          return compareResult;
        });
      }

      let values = [
        new PriorityQueueNode<number>(1, 1),
        new PriorityQueueNode<number>(2, 2),
        new PriorityQueueNode<number>(3, 3),
      ];

      for(let i = 0; i < values.length; i++) {
        heap.enqueue(values[i].value, values[i].priority);
      }

      this.data.push({
        Current: heap.values,
        Previous: [],
        Heap: heap,
        InputValue: 4,
        Message: '',
        Name: tabName,
        Title: `${tabName.toLocaleUpperCase()} Priority Queues`,
        InputPriority: 4
      });
    }

    this.enableTab('max');
  }

  enqueue(): void {
    this.current.Previous = [...this.current.Current];
    const value = this.current.InputValue;
    const priority = this.current.InputPriority;
    this.current.Heap.enqueue(value, priority);
    this.current.Message = `Added ${value} with priority of ${priority}`;
    this.current.Current = this.current.Heap.values;
  }

  dequeue(): void {
    this.current.Previous = [...this.current.Current];
    const value = this.current.Heap.dequeue();
    this.current.Message = `Dequeued ${value.value} with priority of ${value.priority}`;
    this.current.Current = this.current.Heap.values;
  }

  enableTab(tabName: string) {
    this.currentTabName = tabName;
    this.current = this.data.find((x: HeapDisplay<number>) => x.Name === tabName);
  }
}

interface HeapDisplay<T> {
  Heap: PriorityQueue<T>;
  Current: PriorityQueueNode<T>[];
  Previous: PriorityQueueNode<T>[];
  Message: string;
  InputValue: T;
  InputPriority: number;
  Name: string;
  Title: string;
}
