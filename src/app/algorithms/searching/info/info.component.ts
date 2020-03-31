import { Component, OnInit } from '@angular/core';
import { BinarySearchTree } from 'src/app/trees/binary-search-trees';
import { TreeNode } from 'src/app/trees/trees.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})

export class InfoComponent implements OnInit {
  tree: BinarySearchTree<number>;
  bfsList: any[];
  bfsRecursiveList: any[];
  
  constructor() { }

  ngOnInit(): void {
    this.tree = new BinarySearchTree<number>();
    let values = [43,41,42,60,48,50,75,45,67,99,44,46,49,55,65,68,80,100,40];

    for(let i = 0; i < values.length; i++) {
      this.tree.insert(values[i]);
    }

    this.displayTree();
  }

  displayTree() {
    this.bfsList = this.tree.traverseBreadthFirst();
    this.bfsRecursiveList = this.tree.traverseBreadthFirstRecursive();
  }
}
