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
    } else if (index === 0) {
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
    while(prev !== null) {
      var cur = prev.next;
      console.log(`[${i}]: ${prev.value} => ${cur === null ? 'null' : cur.value}`);
      i++;
      prev = cur;
    }
    console.log('================');
  }

  delete(index: number) {
    if (index ===0) {
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
      .traverseLinkedList(findIndex-1);
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
    while(current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
    return this;
  }

  push(value: T): void {
    const newNode = new LinkedListNode<T>(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  pop(): T {
    if (this.head === null) {
      return null;
    }

    let node = this.head;
    let newTail = node;

    while(node.next !== null) {
      newTail = node;
      node.next = node;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if(this.length ===0){
      this.head = null;
      this.tail = null;
    }

    return node.value;
  }

  shift(): T {
    if (this.head === null) {
      return null;
    }
    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if(this.length ===0){
      this.head = null;
      this.tail = null;
    }
    
    return currentHead.value;
  }
}

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
    newTail.previous
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
    } else if (index === 0) {
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
    while(prev !== null) {
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
    if (index ===0) {
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
      .traverseLinkedList(findIndex-1);
    console.log(`Node to delete ${tempNode.next.value} at index ${findIndex}`);
    var nextNext = tempNode.next.next;
    tempNode.next = nextNext;
    if(tempNode.next !== null) {
      tempNode.next.previous = tempNode;
    }
    this.length--;
    return this;
  }
}