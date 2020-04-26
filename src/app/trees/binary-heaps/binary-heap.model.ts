import { element } from "protractor";

export class BinaryHeap<T> {
  values: T[];

  constructor() {
    this.values = [];
  }

  insert(value: T) {
    // add to end of list
    this.values.push(value);

    // loop until its lower than its parent
    let i = this.values.length - 1;
    let parentIndex = this.getParentIndex(i);

    while (i > 0 && this.values[parentIndex] <= value) {
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
    const parentIndex = Math.floor(i - 1 / 2);

    return parentIndex;
  }

  extractMax(): T {
    if (this.values.length === 0) {
      return null;
    }

    // swap first and last values
    this.swap(0, this.values.length - 1);

    // pop the last to get max
    let max = this.values.pop();
    if (this.values.length === 1) {
      return max;
    }

    // sink down
    this.sinkDown();

    return max;
  }

  sinkDown(): void {
    let i = 0;
    let n = this.values.length;
    let value = this.values[i];
    while (true) {
      let leftIndex = 2 * i + 1;
      let rightIndex = 2 * i + 2;
      let left = null;
      let right = null;
      let swapIndex = null;
      // check left
      if (leftIndex < n) {
        left = this.values[leftIndex];
        if (left > value) {
          swapIndex = leftIndex;
        }
      }
      // check right
      if (rightIndex < n) {
        right = this.values[rightIndex];
        if (
          (swapIndex === null && right > value) ||
          (swapIndex !== null && right > left)
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
