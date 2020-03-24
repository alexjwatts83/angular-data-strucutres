import { Component, OnInit } from '@angular/core';
import { Queue } from '../queue.model';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent implements OnInit {
  queue: Queue<number>;
  initialValue: number;
  inputValue: number;
  message: string;
  max: number;

  constructor() { 
    this.initialValue = 10;
    this.queue = new Queue<number>();
    this.inputValue = this.initialValue;
    this.max = 1000;
  }

  ngOnInit(): void {
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  enqueue(): void {
    this.queue.enqueue(this.inputValue);
    this.message = `Enqueue '${this.inputValue}'`;
  }

  enqueueRandom(): void {
    this.inputValue = this.getRandomInt(this.max);
    this.queue.enqueue(this.inputValue);
    this.message = `Enqueue Random number '${this.inputValue}' between ${this.max}`;
  }

  dequeue(): void {
    const popped = this.queue.dequeue();
    this.message = `Dequeue '${popped === null ? 'Nothing' : popped.value }'`;
  }

  peek(): void {
    const popped = this.queue.peek();
    this.message = `Peek '${popped === null ? 'Nothing' : popped.value }'`;
  }
}
