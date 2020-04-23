import { LinkedListNode } from './linked-lists.model';
export class SinglyLinkedList<T> {
  length: number;
  head: LinkedListNode<T>;
  tail: LinkedListNode<T>;
  /**
   * Creates a Linked List
   * @param value first value of the linked list
   */
  constructor(value: T) {
    this.head = new LinkedListNode<T>(value);
    this.tail = this.head;
    this.length = 1;
  }
  /**
   * Appends a new value at the end of the Linked List
   * @param value value to append
   */
  append(value: T) {
    const newTail = new LinkedListNode<T>(value);
    this.tail.next = newTail;
    this.tail = newTail;
    this.length++;
    return this;
  }
  /**
   * Prepends a new node at the start of the Linked List
   * @param value
   */
  prepend(value: T) {
    const newNode = new LinkedListNode<T>(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  /**
   * Inserts a node at the given index
   * @param value
   * @param index
   */
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
  /**
   * Traverses the Linked List until it finds the item at the given index
   * @param index index of item in Linked List
   */
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
  /**
   * Debugging purposes, logs the linked list to the console
   */
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
  /**
   * Deletes the item at the given index
   * @param index index to delete
   */
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
  /**
   * Reverses the Linked List items
   */
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
  /**
   * Adds a value to the end of the linked list
   * @param value value
   */
  push(value: T): void {
    const newNode = new LinkedListNode<T>(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  /**
   * Returns the last item in a linked list
   */
  pop(): T {
    if (this.head === null) {
      return null;
    }
    let node = this.head;
    let newTail = node;
    while (node.next !== null) {
      newTail = node;
      node.next = node;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return node.value;
  }
  /**
   * Returns the first value of the linked list
   */
  shift(): T {
    if (this.head === null) {
      return null;
    }
    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentHead.value;
  }
  /**
   * Inserts a value at the start of a linked list
   * @param value value
   */
  unshift(value: T): void {
    const newNode = new LinkedListNode<T>(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    }
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /**
   * Returns the Node at the given index
   * @param index index in Linked List
   */
  getNodeAt(index: number): LinkedListNode<T> {
    if (this.length < 0 || index >= this.length) {
      return null;
    }
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

    /**
   * Returns the Node at the given index
   * @param index index in Linked List
   */
  getValueAt(index: number): T {
    let node = this.getNodeAt(index);
    return (node === null) ? null : node.value;
  }
  /**
   * Sets the value of an item in the Linked list at the given index
   * @param index index in Linked List
   * @param value new value
   */
  set(index: number, value: T): boolean {
    let found = this.getNodeAt(index);
    if (found === null) {
      return false;
    }
    found.value = value;
    return true;
  }
  /**
   * Inserts a new node at the given index
   * @param index index to insert at
   * @param value value to insert
   */
  insertAt(index: number, value: T): boolean {
    // guards to check index
    if (this.length < 0 || index > this.length) {
      return false;
    }
    // add to start
    if (index === 0) {
      this.unshift(value);
      return true;
    }
    // add to end
    if (index == this.length) {
      this.push(value);
      return true;
    }
    // add by index using the previous index
    let found = this.getNodeAt(index - 1);
    if (found ===  null) {
      return false;
    }

    let next = found.next;
    let newNode = new LinkedListNode<T>(value);
    found.next = newNode;
    newNode.next = next;

    this.length++;

    return true;
  }

  /**
   * 
   * @param index 
   */
  remove(index: number): T{
    if (this.length < 0 || index >= this.length) {
      return null;
    }

    // remove from start
    if (index === 0) {
      return this.shift();
    }
    // remove from end
    if (index == this.length) {
      return this.pop();
    }

    // add by index using the previous index
    let found = this.getNodeAt(index - 1);
    if (found ===  null) {
      return null;
    }

    let nextNext = found.next.next;
    let nodeRemoved = found.next;
    found.next = nextNext;

    this.length--;

    return nodeRemoved.value;
  }
}
