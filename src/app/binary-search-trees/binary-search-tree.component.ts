import { Component, OnInit } from '@angular/core';
import { BinarySearchTree, TreeNode } from './binary-search-trees.model';

@Component({
  selector: 'app-binary-search-tree',
  templateUrl: './binary-search-tree.component.html',
  styleUrls: ['./binary-search-tree.component.scss']
})
export class BinarySearchTreeComponent implements OnInit {
  tree: BinarySearchTree<number>;
  inputValue: string;
  message: string;
  list: any;

  constructor() { 
    this.tree = new BinarySearchTree<number>();
    const values = [43,41,60,48,75,67,99,80];
    for(let i = 0; i < values.length; i++) {
      this.tree.insert(values[i]);
    }
  }

  ngOnInit(): void {
    this.list = this.traverseTree(this.tree);
  }

  traverseTree<T>(bst: BinarySearchTree<T>) {
    const ls = [
      {
        title: `Root:${bst.root.value}`,
        children: []
      }
    ];

    ls[0].children.push(this.traverseTreeNode(bst.root.left, 'L'));
    ls[0].children.push(this.traverseTreeNode(bst.root.right, 'R'));

    return ls;
  }

  traverseTreeNode<T>(node: TreeNode<T>, dir: string) {
    let treeNode = {
      title: `${dir}:${node.value}`,
      children: []
    };

    if (node.left !== null) {
      treeNode.children.push(this.traverseTreeNode(node.left, 'L'));
    }

    if (node.right !== null) {
      treeNode.children.push(this.traverseTreeNode(node.right, 'L'));
    }

    return treeNode;
  }

  addNode() {
    const nodeValue = parseInt(this.inputValue);
    this.tree.insert(nodeValue);
    this.list = this.traverseTree(this.tree);
  }

  doesNotExists() {
    const nodeValue = parseInt(this.inputValue);
    const exists = this.tree.lookup(nodeValue);
    this.message = `Value ${nodeValue} ${exists ? ' does exist :)' : ' does not exists :('}`;
  }
}
