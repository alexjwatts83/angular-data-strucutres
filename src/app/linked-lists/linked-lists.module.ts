import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SinglyLinkedListComponent } from './singly-linked-lists/singly-linked-list.component';
import { SinglyLinkedListDisplayComponent } from './singly-linked-lists/singly-linked-list-display.component';
import { DoublyLinkedListComponent } from './doubly-linked-list/doubly-linked-list.component';
import { DoublyLinkedListDisplayComponent } from './doubly-linked-list-display/doubly-linked-list-display.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'singly',
        component: SinglyLinkedListComponent
      },
      {
        path: 'doubly',
        component: DoublyLinkedListComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    SinglyLinkedListComponent,
    SinglyLinkedListDisplayComponent,
    DoublyLinkedListComponent,
    DoublyLinkedListDisplayComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    SinglyLinkedListComponent,
    SinglyLinkedListDisplayComponent,
    DoublyLinkedListComponent,
    DoublyLinkedListDisplayComponent
  ]
})
export class LinkedListsModule { }
