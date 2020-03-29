import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SortsComponent } from './sorts';

@NgModule({
  declarations: [
    SortsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SortsComponent
  ]
})

export class SortingModule { }
