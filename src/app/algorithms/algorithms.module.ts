import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactorialsComponent } from './factorials/factorials.component';
import { AlgorithmsInfoComponent } from './algorithms-info/algorithms-info.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'info',
        component: AlgorithmsInfoComponent
      },
      {
        path: 'factorials',
        component: FactorialsComponent
      }
    ]
  }
]


@NgModule({
  declarations: [FactorialsComponent, AlgorithmsInfoComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [FactorialsComponent, AlgorithmsInfoComponent]
})
export class AlgorithmsModule { }
