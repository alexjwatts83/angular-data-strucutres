import { DoublyLinkedListNode } from './linked-lists.model';

export class DoublyLinkedList<T> {
  length: number;
  head: DoublyLinkedListNode<T>;
  tail: DoublyLinkedListNode<T>;
  constructor(value: T) {
    this.head = new DoublyLinkedListNode<T>(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value: T) {
    const newTail = new DoublyLinkedListNode<T>(value);
    newTail.previous;
    newTail.previous = this.tail;
    this.tail.next = newTail;
    this.tail = newTail;
    this.length++;
    return this;
  }
  prepend(value: T) {
    const newNode = new DoublyLinkedListNode<T>(value);
    newNode.next = this.head;
    this.head = newNode;
    this.head.next.previous = this.head;
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
    const newNode = new DoublyLinkedListNode<T>(value);
    const previousNodeNext = previousNode.next;
    previousNode.next = newNode;
    newNode.next = previousNodeNext;
    newNode.previous = previousNode;
    newNode.next.previous = newNode;
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
      var prevTxt = prev.previous == null
        ? 'null'
        : prev.previous.value;
      console.log(`[${i}]: ${prevTxt} => ${prev.value} => ${cur === null ? 'null' : cur.value}`);
      i++;
      prev = cur;
    }
    console.log('================');
  }
  delete(index: number) {
    if (index === 0) {
      const nextNode = this.head.next;
      this.head = nextNode;
      this.head.previous = null;
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
    if (tempNode.next !== null) {
      tempNode.next.previous = tempNode;
    }
    this.length--;
    return this;
  }
  private getNewNode(value: T): DoublyLinkedListNode<T>{
    return new DoublyLinkedListNode<T>(value);
  }

  /**
   * Value to add at the end of list
   * @param value value to add
   */
  push(value: T){
    var newNode = this.getNewNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  /**
   * Remove and return the last item
   */
  pop(): T {
    // head is null
    if (this.head) {
      return null;
    }
    // only one item in linked list
    const currentTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return currentTail.value;
    }
    // set previous tail to new tail
    const previous = this.tail.previous;
    this.tail = previous;
    // set new tail next to null
    this.tail.next = null;
    this.length--;
     
    currentTail.previous = null;

    return currentTail.value;
  }

  /**
   * removes the first node from the list
   */
  shift(): T {
    if(this.head == null) {
      return null;
    }
    
    let currentHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = currentHead.next;
      this.head.previous = null;
      currentHead.next = null; 
    }

    this.length--;
    return currentHead.value;
  }

  /**
   * adds item to start of the list
   * @param value value to add to start
   */
  unshift(value: T): boolean {
    const newNode = this.getNewNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let currentHead = this.head;
      this.head = newNode;
      newNode.next = currentHead;
      currentHead.previous = this.head;
    }
    this.length++;
    return true;
  }

  /**
   * Returns the Doubly Linked Node at the given index
   * @param index index to find
   */
  getNodeAt(index: number): DoublyLinkedListNode<T> {
    if (this.length < 0 || index >= this.length) {
      return null;
    }

    let mid = Math.floor(this.length / 2);
    if (index < mid) {
      return this.searchFromStart(index);
    }
    return this.searchFromEnd(index);
  }

  /**
   * Started search from the start of the list
   * @param index index
   */
  private searchFromStart(index: number): DoublyLinkedListNode<T> {
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
   * Start search from the end of the list
   * @param index index
   */
  private searchFromEnd(index: number): DoublyLinkedListNode<T> {
    if (this.length < 0 || index >= this.length) {
      return null;
    }
    let counter = this.length - 1;
    let current = this.tail;
    while (counter !== index) {
      current = current.previous;
      counter--;
    }
    return current;
  }

  /**
   * Returns the value at the given index
   * @param index index to find
   */
  getValueAt(index: number): T {
    let node = this.getNodeAt(index);
    return (node === null) ? null : node.value;
  }

  /**
   * Sets the value of the item in the list to the new value
   * @param index index to set value at
   * @param value new value
   */
  set(index: number, value): boolean {
    let foundNode = this.getNodeAt(index);
    if (foundNode === null) {
      return false;
    }
    foundNode.value = value;
    return true;
  }

  /**
   * insert new value at the given index
   * @param index index to insert at
   * @param value value to insert
   */
  insertAt(index: number, value: T): boolean {
    if (index === 0) {
      return this.unshift(value);
    }
    if (index == this.length - 1) {
      this.push(value);
      return true;
    }

    let previous = this.getNodeAt(index - 1);
    if (previous === null) {
      return false;
    }

    let previousNext = previous.next;
    let newNode = this.getNewNode(value);
    previous.next = newNode;
    newNode.previous = previous;
    newNode.next = previousNext;
    previousNext.previous = newNode;
    this.length++;

    return true;
  }


  removeAt(index: number): T {
    if (index === 0 ){
      return this.shift();
    }
    if (index == this.length - 1) {
      return this.pop();
    }

    let nodeToRemove = this.getNodeAt(index);
    if (nodeToRemove === null) {
      return null;
    }

    let previous = nodeToRemove.previous;
    let next = nodeToRemove.next;
    previous.next = next;
    next.previous = next;

    this.length--;

    nodeToRemove.next = null;
    nodeToRemove.previous = null;

    return nodeToRemove.value;
  }
}
