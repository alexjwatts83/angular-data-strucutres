import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BinarySearchTreeComponent } from './binary-search-tree.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: BinarySearchTreeComponent
  }
];

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
    BinarySearchTreeComponent,
  ]
})
export class BinarySearchTreesModule { }
