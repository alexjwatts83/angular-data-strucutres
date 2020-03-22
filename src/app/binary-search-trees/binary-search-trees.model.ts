export class TreeNode<T>{
  value: T;
  left: TreeNode<T>;
  right: TreeNode<T>;
  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree<T> {
  root: TreeNode<T>;

  constructor() {
    this.root = null;
  }

  insert(value: T) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;

    while(true) {
      if(value < currentNode.value) {
        if(currentNode.left === null) {
          currentNode.left = newNode;
          break;
        }
        currentNode = currentNode.left;
      } else {
        if(currentNode.right === null) {
          currentNode.right = newNode;
          break;
        }
        currentNode = currentNode.right;
      }
    }
  }

  lookup(value) {
    let currentNode = this.root;
    while(currentNode !== null) {
      if(currentNode.value === value) {
        break
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return currentNode;
  }
}