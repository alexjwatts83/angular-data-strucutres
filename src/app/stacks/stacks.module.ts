import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StackComponent } from './stack/stack.component';

const routes: Routes = [
  {
    path: '',
    component: StackComponent
  }
];

@NgModule({
  declarations: [StackComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [StackComponent]
})
export class StacksModule { }
