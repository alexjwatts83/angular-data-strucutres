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

  remove2(value: T): {msg: string, node: TreeNode<T>, parent: TreeNode<T>} {
    const result = {
      msg: `Node with value of ${value} not found`,
      node: null,
      parent: null
    };

    let parentNode = null;
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
    const parentText = parentNode === null ? 'NULL' : parentNode.value;
    result.msg = `Delete: ${currentNode.value} => parent: ${parentText}<br />sasd`;

    // check if a leaf node
    if (currentNode.left === null && currentNode.right === null) {
      if (currentNode.value = parentNode.left.value) {
        parentNode.left = null;
      } else {
        parentNode.right = null;
      }
    } else if (currentNode.left === null || currentNode.right === null) {
      const tempChild = currentNode.left === null ? currentNode.right : currentNode. left;

      console.log(`parentNode: ${parentNode.left.value}<=[${parentNode.value}]=>${parentNode.right.value}`);

      if (currentNode.left === null) {
        console.log(`currentNode: NULL<=[${currentNode.value}]=>${currentNode.right.value}`);
      } else {
        console.log(`currentNode: ${currentNode.left.value}<=[${currentNode.value}]=>NULL`);
      }

      if (tempChild.left === null && tempChild.right === null) {
        console.log(`tempChild: NULL<=[${tempChild.value}]=>NULL`);
      } else if (tempChild.left !== null && tempChild.left === null) {
        console.log(`tempChild: ${tempChild.left.value}<=[${tempChild.value}]=>NULL`);
      } else if (tempChild.left !== null && tempChild.left === null) {
        console.log(`tempChild: NULL<=[${tempChild.value}]=> ${tempChild.right.value}`);
      } else {
        console.log(`tempChild: ${tempChild.left.value}<=[${tempChild.value}]=>${tempChild.right.value}`);
      }

      if (currentNode.value === parentNode.left.value) {
        console.log(`Setting parent ${parentNode.value} left tempChild: ${tempChild.value}`);
        parentNode.left = tempChild;
      } else {
        console.log(`Setting parent ${parentNode.value} right tempChild: ${tempChild.value}`);
        parentNode.right = tempChild;
      }
      
      console.log(parentNode);
    }
    return result;
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

    this.root = this.deleteRec(this.root, value);

    console.log('root', this.root);

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

  deleteRec(node: TreeNode<T>, value: T) {
    if (node === null) {
      console.log('node is null');
      return node;
    }

    if (value < node.value) {
      console.log(`Deleting Left as ${value} < ${node.value}`);
      node.left = this.deleteRec(node.left, value);
    } else if (value > node.value) {
      console.log(`Deleting Right as ${value} > ${node.value}`);
      node.right = this.deleteRec(node.right, value);
    } else {
      if (node.left === null) {
        const text = node.right === null ? 'NULL' : node.right.value;
        console.log(`Returning Right ${text} to delete as left is null`);
        return node.right;
      } else if (node.right === null) {
        const text = node.left === null ? 'NULL' : node.left.value;
        console.log(`Returning Left ${text} to delete as right is null`);
        return node.left;
      }
      const prevMin = node.value;
      const minv = this.minValue(node.right);
      console.log(`Setting Min value to ${minv} from ${prevMin}`);
      node.value = minv;

      console.log('Deleting Right again');
      node.right = this.deleteRec(node.right, node.value);
    }
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