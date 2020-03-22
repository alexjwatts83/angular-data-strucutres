import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HashesComponent } from './hashes.component';
import { HashesDisplayComponent } from './hashes-display.component';

const routes: Routes = [
  {
    path: '',
    component: HashesComponent
  }
];

@NgModule({
  declarations: [HashesComponent, HashesDisplayComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [HashesComponent, HashesDisplayComponent]
})
export class HashesModule { }
