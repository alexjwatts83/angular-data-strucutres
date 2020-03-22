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
    this.inputValue = '99';
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
}
