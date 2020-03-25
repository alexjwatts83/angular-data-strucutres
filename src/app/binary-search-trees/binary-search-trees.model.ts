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
      } else {
        if(currentNode.right === null) {
          currentNode.right = newNode;
          break;
        }
        currentNode = currentNode.right;
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

  remove(value: T): {msg: string, node: TreeNode<T>} {
    const nodeToRemove =  this.lookup(value);
    if (nodeToRemove === null) {
      return {
        msg: `Node with value of ${value} not found`,
        node: null
      };
    }
    const hasLeftNode = nodeToRemove.left !== null;
    const hasRightNode = nodeToRemove.right !== null;

    if (!hasLeftNode && !hasRightNode) {
      console.log('Has No Child nodes');
      return {
        msg: `Node '${value}', Has No Child nodes`,
        node: nodeToRemove
      };
    }
    if (hasLeftNode && hasRightNode) {
      return {
        msg: `Node '${value}', Has Left and Right nodes`,
        node: nodeToRemove
      };
    }

    return {
      msg: `Node '${value}', Has one Child node`,
      node: nodeToRemove
    };
  }
}