import { SimpleNode } from '../shared';

export class Stack<T> {
  top: SimpleNode<T>;
  bottom: SimpleNode<T>;
  length: number;

  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek(): SimpleNode<T> {
    return this.top;
  }

  push(value: T): Stack<T>{
    const node = new SimpleNode(value);

    if (this.top === null) {
      this.top = node;
      this.bottom = node;
    } else {
      node.next = this.top;
      this.top = node;
    }

    this.length++;

    return this;
  }

  pop(): SimpleNode<T>{
    if(this.isEmpty()) {
      
      return null;
    }

    let node = this.top;
    this.top = this.top.next;
    this.length--;

    if(this.length === 0) {
      this.bottom = null;
    }

    return node;
  }

  isEmpty() {
    return this.length === 0;
  }
}