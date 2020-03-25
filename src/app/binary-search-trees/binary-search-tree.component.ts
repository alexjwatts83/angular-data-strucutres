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
    this.tree = new BinarySearchTree<number>();
    const values = [43,41,60,48,75,67,99,80];
    for(let i = 0; i < values.length; i++) {
      this.tree.insert(values[i]);
    }
    this.max = 100;
    this.inputValue = this.getRandomInt(this.max);
  }

  ngOnInit(): void {
    this.list = this.traverseTree(this.tree);
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

  addNode() {
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
}
