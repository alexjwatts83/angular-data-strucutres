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

    addNode(value: T) {
        if (this.root === null) {
            this.root = new TreeNode(value);
            return;
        }
    }
}