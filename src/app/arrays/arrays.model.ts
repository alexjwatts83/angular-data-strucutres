export class MyArray {
  length: number;
  data: any;

  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;

    return this.data;
  }

  pop() {
    const lastIndex = this.length - 1;
    const lastItem = this.data[lastIndex];
    delete this.data[lastIndex];
    this.length--;

    return lastItem;
  }

  shiftItems(index) {
    for(let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length -1];
    this.length --;
  }
}