export class SimpleNode<T> {
  value: T;
  next: SimpleNode<T>;

  constructor(value: T){
    this.value = value;
    this.next = null;
  }
}