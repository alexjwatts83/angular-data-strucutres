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
  insertSequence: T[];
  constructor() {
    this.root = null;
    this.insertSequence = [];
  }

  insert(value: T): void {
    this.insertSequence.push(value);
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
    let nodeToDelete = this.root;

    while(nodeToDelete !== null) {
      if(nodeToDelete.value === value){
        break;
      } else if (value < nodeToDelete.value) {
        parentNode = nodeToDelete;
        nodeToDelete = nodeToDelete.left;
      } else {
        parentNode = nodeToDelete;
        nodeToDelete = nodeToDelete.right;
      }
    }

    if (nodeToDelete === null) {
      return result;
    }

    result.node = nodeToDelete;
    result.parent = parentNode;

    if (nodeToDelete.left === null && nodeToDelete.right === null) {
      if(nodeToDelete.value === this.root.value) {
        this.root = null;
        return result;
      }
      /*
      Has no children nodes so set the left or righ node on the parent
      to null based off the node to delete value
      */
      if (parentNode.left && nodeToDelete.value === parentNode.left.value) {
        parentNode.left = null;
      } else {
        parentNode.right = null;
      }
    } else if (nodeToDelete.left === null || nodeToDelete.right === null) {
      /*
      Node to delete has either a Left or Right node but not both
      Has Left but no right, replace parent node left with delete nodes left
          P          P
         /          /
        D          L
       /
      L
      Has Right but no left, replace parent node right with delete nodes right
      P             P
       \             \
        D             R
         \
          R
      */
      const tempChild = (nodeToDelete.left === null ) ? nodeToDelete.right : nodeToDelete. left;
      if(nodeToDelete.value === this.root.value) {
        this.root = tempChild;
        return result;
      }

      if (parentNode.left && nodeToDelete.value === parentNode.left.value) {
        parentNode.left = tempChild;
      } else {
        parentNode.right = tempChild;
      }
    } else if (nodeToDelete.left !== null && nodeToDelete.right !== null) {
      /*
      Has left and right 
      */
      
      if (nodeToDelete.value === this.root.value) {
        const rootLeft = this.root.left;
        this.root = this.root.right;
        this.root.left = rootLeft;
        return result;
      }

      // find left most node starting from the right
      let leftMostNode = nodeToDelete.right;
      let leftMostNodeParent = null;
      while(leftMostNode.left !== null) {
        leftMostNodeParent = leftMostNode;
        leftMostNode = leftMostNode.left
      }

      if (leftMostNodeParent) {
        leftMostNode.left = nodeToDelete.left;
        leftMostNode.right = nodeToDelete.right;
        leftMostNodeParent.left = null;
      } else {
        leftMostNode.left = nodeToDelete.left;
      }

      if (parentNode.left && parentNode.left.value === nodeToDelete.value) {
        parentNode.left = leftMostNode;
      } else {
        parentNode.right = leftMostNode;
      }
    }
    
    return result;
  }
}