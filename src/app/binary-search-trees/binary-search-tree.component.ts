import { Component, OnInit } from '@angular/core';
import { BinarySearchTree } from './binary-search-trees.model';

@Component({
  selector: 'app-binary-search-tree',
  templateUrl: './binary-search-tree.component.html',
  styleUrls: ['./binary-search-tree.component.scss']
})
export class BinarySearchTreeComponent implements OnInit {
  tree: BinarySearchTree<number>;
  inputValue: string;
  message: string;
  constructor() { 
    this.tree = new BinarySearchTree<number>();
    const values = [43,41,60,48,75,67,99,80];
    for(let i = 0; i < values.length; i++) {
      this.tree.insert(values[i]);
    }
  }

  ngOnInit(): void {
  }

  addNode() {
    const nodeValue = parseInt(this.inputValue);
    this.tree.insert(nodeValue);
  }

  doesNotExists() {
    const nodeValue = parseInt(this.inputValue);
    const exists = this.tree.lookup(nodeValue);
    this.message = `Value ${nodeValue} ${exists ? ' does exist :)' : ' does not exists :('}`;
  }

  traverseTree(node: any) {
    let tree: any;
    tree = { value: node.value };
    tree.left = node.left === null ? null : this.traverseTree(node.left);
    tree.right = node.right === null ? null : this.traverseTree(node.right);
    return tree;
  }
}
