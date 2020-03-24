import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StackComponent } from './stack/stack.component';
import { StackDisplayComponent } from './stack-display/stack-display.component';

const routes: Routes = [
  {
    path: '',
    component: StackComponent
  }
];

@NgModule({
  declarations: [StackComponent, StackDisplayComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [StackComponent, StackDisplayComponent]
})
export class StacksModule { }
