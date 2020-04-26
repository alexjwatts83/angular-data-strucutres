import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BinarySearchTreeComponent } from './binary-search-trees/';
import { BinaryHeapComponent } from './binary-heaps/';
import { TreeDisplayComponent } from './tree-display/tree-display.component';
import { TrieComponent } from './tries/trie/trie.component';
import { PriorityQueuesComponent } from './priority-queues/priority-queues.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'binary-search-trees',
        component: BinarySearchTreeComponent
      },
      {
        path: 'binary-heaps',
        component: BinaryHeapComponent
      },
      {
        path: 'tries',
        component: TrieComponent
      },
      {
        path: 'priority-queues',
        component: PriorityQueuesComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    BinarySearchTreeComponent,
    BinaryHeapComponent,
    TreeDisplayComponent,
    TrieComponent,
    PriorityQueuesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    BinarySearchTreeComponent,
    BinaryHeapComponent,
    TreeDisplayComponent,
    TrieComponent,
    PriorityQueuesComponent
  ]
})
export class TreesModule { }
