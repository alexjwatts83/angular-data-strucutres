export class PriorityQueueNode<T> {
  value: T;
  priority: number;
  constructor(value: T, priority: number) {
    this.value = value;
    this.priority = priority;
  }
}

export class PriorityQueue<T> {
  values: PriorityQueueNode<T>[];
  _comparatorFn: any;

  constructor(comparatorFn: any) {
    this.values = [];
    this._comparatorFn = comparatorFn || this._defaultComparatorFn;
  }

  _defaultComparatorFn(x: PriorityQueueNode<T>, y: PriorityQueueNode<T>) {
    if (x.priority > y.priority) {
      return 1;
    }

    if (x.priority < y.priority) {
      return -1;
    }

    return 0;
  }

  _compare(i: number, j: number) {
    return this._comparatorFn(this.values[i], this.values[j]);
  }

  enqueue(value: T, priority: number) {
    // add to end of list
    this.values.push(new PriorityQueueNode(value, priority));

    // loop until its lower than its parent
    let i = this.values.length - 1;
    let parentIndex = this.getParentIndex(i);

    while (i > 0 && this._compare(parentIndex, i) <= 0) {
      this.swap(i, parentIndex);

      i = parentIndex;
      parentIndex = this.getParentIndex(i);
    }
  }

  swap(i: number, j: number) {
    let value = this.values[i];
    let parentValue = this.values[j];
    this.values[j] = value;
    this.values[i] = parentValue;
  }

  getParentIndex(i: number): number {
    const parentIndex = Math.floor((i - 1) / 2);

    return parentIndex;
  }

  dequeue(): T {
    if (this.values.length === 0) {
      return null;
    }

    // swap first and last values
    this.swap(0, this.values.length - 1);

    // pop the last to get max
    let max = this.values.pop();
    if (this.values.length === 1) {
      return max.value;
    }

    // sink down
    this.sinkDown();

    return max.value;
  }

  sinkDown(): void {
    let i = 0;
    let n = this.values.length;
    while (true) {
      let leftIndex = 2 * i + 1;
      let rightIndex = 2 * i + 2;
      let swapIndex = null;
      // check left
      if (leftIndex < n) {
        if (this._compare(leftIndex, i)) {
          swapIndex = leftIndex;
        }
      }
      // check right
      if (rightIndex < n) {
        if (
          (swapIndex === null && this._compare(rightIndex, i)) ||
          (swapIndex !== null && this._compare(rightIndex, leftIndex))
        ) {
          swapIndex = rightIndex;
        }
      }

      if (swapIndex === null) {
        break;
      }

      this.swap(i, swapIndex);
      i = swapIndex;
    }
  }
}