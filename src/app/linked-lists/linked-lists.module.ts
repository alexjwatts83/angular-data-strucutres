import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LinkedListComponent } from './linked-list.component';

const routes: Routes = [
  {
    path: '',
    component: LinkedListComponent
  }
];

@NgModule({
  declarations: [LinkedListComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [LinkedListComponent]
})
export class LinkedListsModule { }
