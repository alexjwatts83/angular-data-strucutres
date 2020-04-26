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
    
    while(i > 0 && this.values[parentIndex] <= value) {
      let parentValue = this.values[parentIndex];
      this.values[parentIndex] = value;
      this.values[i] = parentValue;

      i = parentIndex;
      parentIndex = this.getParentIndex(i);
    }
  }

  getParentIndex(i: number): number {
    const parentIndex = Math.floor(i - 1 / 2);

    return parentIndex;
  }
}