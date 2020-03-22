import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ArrayComponent } from './array.component';

const routes: Routes = [
  {
    path: '',
    component: ArrayComponent
  }
];

@NgModule({
  declarations: [ArrayComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [ArrayComponent]
})
export class ArraysModule { }
