import { LinkedListNode } from './linked-lists.model';
export class SinglyLinkedList<T> {
  length: number;
  head: LinkedListNode<T>;
  tail: LinkedListNode<T>;
  constructor(value: T) {
    this.head = new LinkedListNode<T>(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value: T) {
    const newTail = new LinkedListNode<T>(value);
    this.tail.next = newTail;
    this.tail = newTail;
    this.length++;
    return this;
  }
  prepend(value: T) {
    const newNode = new LinkedListNode<T>(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  insert(value: T, index: number) {
    console.log(`Add ${value} at index ${index}`);
    if (index >= this.length) {
      return this.append(value);
    }
    else if (index === 0) {
      return this.prepend(value);
    }
    var previousNodeIndex = index - 1;
    var previousNode = this.traverseLinkedList(previousNodeIndex);
    console.log(`Node to replace ${previousNode.value} at index ${previousNodeIndex}`);
    const newNode = new LinkedListNode<T>(value);
    const previousNodeNext = previousNode.next;
    previousNode.next = newNode;
    newNode.next = previousNodeNext;
    this.length++;
    return this;
  }
  traverseLinkedList(index: number) {
    var currentNode = this.head;
    var currentIndex = 0;
    while (currentNode !== null) {
      if (currentIndex === index) {
        return currentNode;
      }
      currentNode = currentNode.next;
      currentIndex++;
    }
    return this.tail;
  }
  log() {
    let i = 0;
    let prev = this.head;
    console.log('================');
    console.log(`length: ${this.length}`);
    while (prev !== null) {
      var cur = prev.next;
      console.log(`[${i}]: ${prev.value} => ${cur === null ? 'null' : cur.value}`);
      i++;
      prev = cur;
    }
    console.log('================');
  }
  delete(index: number) {
    if (index === 0) {
      const nextNode = this.head.next;
      this.head = nextNode;
      this.length--;
      return this;
    }
    let findIndex = index;
    if (index >= this.length) {
      findIndex = this.length - 1;
    }
    var tempNode = this
      .traverseLinkedList(findIndex - 1);
    console.log(`Node to delete ${tempNode.next.value} at index ${findIndex}`);
    var nextNext = tempNode.next.next;
    tempNode.next = nextNext;
    this.length--;
    return this;
  }
  reverse() {
    if (this.head.next === null) {
      return this;
    }
    let prev = null;
    let current = this.head;
    let next = null;
    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
    return this;
  }
}
