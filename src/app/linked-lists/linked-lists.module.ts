import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LinkedListComponent } from './linked-list.component';
import { LinkedListDisplayComponent } from './linked-list-display.component';

const routes: Routes = [
  {
    path: '',
    component: LinkedListComponent
  }
];

@NgModule({
  declarations: [LinkedListComponent, LinkedListDisplayComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [LinkedListComponent, LinkedListDisplayComponent]
})
export class LinkedListsModule { }
