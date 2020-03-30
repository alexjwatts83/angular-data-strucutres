import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info';
import { FormsModule } from '@angular/forms';
import { TreesModule } from 'src/app/trees';

@NgModule({
  declarations: [
    InfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TreesModule,
  ],
  exports: [
    InfoComponent
  ]
})
export class SearchingModule { }
