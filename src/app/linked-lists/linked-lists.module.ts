import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SinglyLinkedListComponent } from './singly-linked-lists/singly-linked-list.component';
import { SinglyLinkedListDisplayComponent } from './singly-linked-lists/singly-linked-list-display.component';

const routes: Routes = [
  {
    path: '',
    component: SinglyLinkedListComponent
  }
];

@NgModule({
  declarations: [
    SinglyLinkedListComponent,
    SinglyLinkedListDisplayComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    SinglyLinkedListComponent,
    SinglyLinkedListDisplayComponent
  ]
})
export class LinkedListsModule { }
