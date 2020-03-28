import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BinarySearchTreeComponent } from './binary-search-trees/';
import { BinaryHeapComponent } from './binary-heaps/';

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
      }
    ]
  }
]

@NgModule({
  declarations: [
    BinarySearchTreeComponent,
    BinaryHeapComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    BinarySearchTreeComponent,
    BinaryHeapComponent
  ]
})
export class TreesModule { }
