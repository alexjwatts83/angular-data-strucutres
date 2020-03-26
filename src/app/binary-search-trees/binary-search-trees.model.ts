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

export class BinarySearchTree<T> {
  root: TreeNode<T>;

  constructor() {
    this.root = null;
  }

  insert(value: T): void {
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
      } else if(value > currentNode.value)  {
        if(currentNode.right === null) {
          currentNode.right = newNode;
          break;
        }
        currentNode = currentNode.right;
      } else {
        break;
      }
    }
  }

  lookup(value: T): TreeNode<T> {
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



  remove2(value: T): {msg: string, node: TreeNode<T>, parent: TreeNode<T>} {
    const result = {
      msg: `Node with value of ${value} not found`,
      node: null,
      parent: null
    };

    let parentNode: TreeNode<T> = null;
    let currentNode = this.root;
    while(currentNode !== null) {
      if(currentNode.value === value){
        break;
      } else if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else {
        parentNode = currentNode;
        currentNode = currentNode.right;
      }
    }

    if (currentNode === null) {
      return result;
    }

    result.node = currentNode;
    result.parent = parentNode;
    console.log(currentNode.toDisplay('currentNode'));
    console.log(parentNode.toDisplay('parentNode'));

    // check if a leaf node
    if (currentNode.left === null && currentNode.right === null) {
      if (parentNode.left && currentNode.value === parentNode.left.value) {
        parentNode.left = null;
      } else {
        parentNode.right = null;
      }
    } else if (currentNode.left === null || currentNode.right === null) {
      const tempChild = currentNode.left === null ? currentNode.right : currentNode. left;

      if (parentNode.left && currentNode.value === parentNode.left.value) {
        parentNode.left = tempChild;
      } else {
        parentNode.right = tempChild;
      }
    }
    return result;
  }

  minValue(node: TreeNode<T>) {
    let minv = node.value;
    while (node.left !== null) {
      minv = node.left.value;
      node = node.left;
    }
    return minv;
  }
}