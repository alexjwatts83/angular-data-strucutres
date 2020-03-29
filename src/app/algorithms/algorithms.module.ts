import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactorialsComponent } from './factorials';
import { AlgorithmsInfoComponent } from './algorithms-info/algorithms-info.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FibonacciComponent } from './fibonacci';

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
      },
      {
        path: 'fibonacci',
        component: FibonacciComponent
      },
    ]
  }
]

@NgModule({
  declarations: [FactorialsComponent, AlgorithmsInfoComponent, FibonacciComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [FactorialsComponent, AlgorithmsInfoComponent, FibonacciComponent]
})
export class AlgorithmsModule { }
