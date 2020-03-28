export class TreeNode<T>{
  value: T;
  left: TreeNode<T>;
  right: TreeNode<T>;
  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  toDisplay(name: string) {
    let displayText = '';
    if (this.left === null && this.right === null) {
      displayText = `${name}: NULL<=[${this.value}]=>NULL`;

    } else if (this.left !== null && this.right === null) {
      displayText = `${name}: ${this.left.value}<=[${this.value}]=>NULL`;

    } else if (this.left === null && this.right !== null) {
      displayText = `${name}: NULL<=[${this.value}]=> ${this.right.value}`;

    } else {
      displayText = `${name}: ${this.left.value}<=[${this.value}]=>${this.right.value}`;
    }
    return displayText;
  }
}