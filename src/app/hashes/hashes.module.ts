import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HashesComponent } from './hashes.component';

const routes: Routes = [
  {
    path: '',
    component: HashesComponent
  }
];

@NgModule({
  declarations: [HashesComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [HashesComponent]
})
export class HashesModule { }
