import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BinarySearchTreeComponent } from './binary-search-trees/';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'binary-search-trees'
        ,component: BinarySearchTreeComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    BinarySearchTreeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    BinarySearchTreeComponent
  ]
})
export class TreesModule { }
