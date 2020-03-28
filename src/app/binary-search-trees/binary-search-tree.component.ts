import { Component, OnInit } from '@angular/core';
import { BinarySearchTree, TreeNode } from './binary-search-trees.model';

@Component({
  selector: 'app-binary-search-tree',
  templateUrl: './binary-search-tree.component.html',
  styleUrls: ['./binary-search-tree.component.scss']
})
export class BinarySearchTreeComponent implements OnInit {
  tree: BinarySearchTree<number>;
  previousTree: BinarySearchTree<number>;
  inputValue: number;
  message: string;
  list: any;
  prevList: any;
  max: number;

  constructor() { 
    this.max = 100;
    this.inputValue = this.getRandomInt(this.max);
    this.inputValue = 99;
  }

  ngOnInit(): void {
    this.init();
    // this.init2(20);
  }

  init() {
    this.previousTree = new BinarySearchTree<number>();
    this.tree = new BinarySearchTree<number>();
    // const values = [43,41,60,48,75,67,99,80];
    let values = [43,41,42,60,48,50,75,45,67,99,44,46,49,55,65,68,80,100,40];
    values = [43,41,42,60,48,50,75,45,67,99,44,46,49,55,65,68,80,100,40];
    for(let i = 0; i < values.length; i++) {
      this.tree.insert(values[i]);
    }
    this.displayTree();
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  isNewNode(node: any): boolean {
    return node.value === this.inputValue;
  }

  traverseTree<T>(bst: BinarySearchTree<T>) {
    if (bst.root === null){
      return [
        {
          title: `Root: EMPTY`,
          children: [],
          isNewNode: false
        }
      ];
    }
    const ls = [
      {
        title: `Root:${bst.root.value}`,
        children: [],
        isNewNode: this.isNewNode(bst.root)
      }
    ];

    ls[0].children.push(this.traverseTreeNode(bst.root.left, 'L'));
    ls[0].children.push(this.traverseTreeNode(bst.root.right, 'R'));

    return ls;
  }

  traverseTreeNode<T>(node: TreeNode<T>, dir: string) {
    if (node === null){
      return [
        {
          title: `${dir}:EMPTY`,
          children: [],
          isNewNode: false
        }
      ];
    }
    let treeNode = {
      title: `${dir}:${node.value}`,
      children: [],
      isNewNode: this.isNewNode(node)
    };

    if (node.left !== null) {
      treeNode.children.push(this.traverseTreeNode(node.left, 'L'));
    }

    if (node.right !== null) {
      treeNode.children.push(this.traverseTreeNode(node.right, 'R'));
    }

    return treeNode;
  }

  savePrev(): void {
    const currentValues = [...this.tree.insertSequence];

    // for(let i = 0; i < this.tree.insertSequence.length; i++) {
    //   currentValues.push(this.tree.insertSequence[i]);
    // }

    for(let i = 0; i < currentValues.length; i++) {
      this.previousTree.insert(currentValues[i]);
    }
  }

  displayTree() {
    this.list = this.traverseTree(this.tree);
    this.prevList = this.traverseTree(this.previousTree);
  }

  addNode() {
    this.savePrev();
    this.tree.insert(this.inputValue);
    this.setMessage(`Added node '${this.inputValue}'`);
    this.displayTree();
  }

  addRandomNode() {
    this.inputValue = this.getRandomInt(this.max);
    this.addNode();
    this.setMessage(`Added Random Node '${this.inputValue}' between ${this.max}`);
  }

  setMessage(msg: string): void {
    this.message = msg;
  }

  doesNotExists() {
    const exists = this.tree.lookup(this.inputValue);
    this.message = `Value ${this.inputValue} ${exists ? ' does exist :)' : ' does not exists :('}`;
  }

  reset() {
    this.tree = new BinarySearchTree<number>();
    this.displayTree();
  }

  removeNode() {
    this.savePrev();
    const node = this.tree.remove2(this.inputValue);
    this.setMessage(node.msg);
    this.displayTree();
  }
}
