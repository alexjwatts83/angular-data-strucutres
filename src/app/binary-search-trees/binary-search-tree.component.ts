import { Component, OnInit } from '@angular/core';
import { BinarySearchTree, TreeNode } from './binary-search-trees.model';

@Component({
  selector: 'app-binary-search-tree',
  templateUrl: './binary-search-tree.component.html',
  styleUrls: ['./binary-search-tree.component.scss']
})
export class BinarySearchTreeComponent implements OnInit {
  tree: BinarySearchTree<number>;
  inputValue: number;
  message: string;
  list: any;
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
    this.tree = new BinarySearchTree<number>();
    // const values = [43,41,60,48,75,67,99,80];
    let values = [43,41,42,60,48,50,75,45,67,99,44,46,49,55,65,68,80,100,40];
    values = [43,41,42,60,48,50,75,45,67,99,44,46,49,55,65,68,80,100,40];
    for(let i = 0; i < values.length; i++) {
      this.tree.insert(values[i]);
    }
    this.list = this.traverseTree(this.tree);
  }

  init2(max: number){
    this.tree = new BinarySearchTree<number>();
    let startingPoint = (max / 2) + 1;
    let values = [startingPoint];
    this.tree.insert(startingPoint);

    for(let i = 1; i <= 21; i++) {
      this.tree.insert(i);
    }

    this.list = this.traverseTree(this.tree);
    console.log(values);
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
    // const treeRef =  JSON.parse(JSON.stringify(this.list));
    const treeRef = this.list;
  }

  addNode() {
    this.savePrev();
    this.tree.insert(this.inputValue);
    this.list = this.traverseTree(this.tree);
    this.setMessage(`Added node '${this.inputValue}'`);
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
    this.list = this.traverseTree(this.tree);
  }

  removeNode() {
    const node = this.tree.remove2(this.inputValue);
    this.list = this.traverseTree(this.tree);
    this.setMessage(node.msg);
  }
}
