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
  list: any;
  dfsListInOrder: any[];
  dfsListPostOrder: any[];
  dfsListPreOrder: any[];

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
    this.list = this.traverseTree(this.tree);
    this.dfsListInOrder =  this.tree.traverseDepthFirstSearchInOrder();
    this.dfsListPostOrder = this.tree.traverseDepthFirstSearchPostOrder();
    this.dfsListPreOrder = this.tree.traverseDepthFirstSearchPreOrder();
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
        isNewNode: false
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
      isNewNode: false
    };

    if (node.left !== null) {
      treeNode.children.push(this.traverseTreeNode(node.left, 'L'));
    }

    if (node.right !== null) {
      treeNode.children.push(this.traverseTreeNode(node.right, 'R'));
    }

    return treeNode;
  }
}
