import { SimpleNode } from '../shared';

export class Queue<T> {
  first: SimpleNode<T>;
  last: SimpleNode<T>;
  length: number;
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek(): SimpleNode<T> {
    return this.first;
  }

  enqueue(value: T): Queue<T>{
    const node = new SimpleNode(value);
    if(this.first === null) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.length++;

    return this;
  }
  
  dequeue():  SimpleNode<T>{
    if (this.first === null) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }

    let node = this.first;
    this.first = this.first.next;
    this.length--;

    return node;
  }
}