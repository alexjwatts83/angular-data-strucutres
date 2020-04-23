export class LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T>;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class DoublyLinkedListNode<T> {
  value: T;
  next: DoublyLinkedListNode<T>;
  previous: DoublyLinkedListNode<T>;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

