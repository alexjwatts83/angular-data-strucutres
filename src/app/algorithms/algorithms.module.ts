import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactorialsComponent } from './factorials';
import { AlgorithmsInfoComponent } from './algorithms-info/algorithms-info.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FibonacciComponent } from './fibonacci';
import { ReverseStringComponent } from './reverse-string/';
import { SortingModule } from './sorting/sorting.module';
import { SortsComponent } from './sorting/sorts';
import { InfoComponent } from './searching/info';
import { SearchingModule } from './searching';


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
      {
        path: 'reverse-string',
        component: ReverseStringComponent
      },
      {
        path: 'sorting',
        component: SortsComponent
      },
      {
        path: 'searching',
        component: InfoComponent
      },
    ]
  }
]

@NgModule({
  declarations: [
    FactorialsComponent,
    AlgorithmsInfoComponent,
    FibonacciComponent,
    ReverseStringComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SortingModule,
    SearchingModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    FactorialsComponent,
    AlgorithmsInfoComponent,
    FibonacciComponent,
    ReverseStringComponent,
  ]
})
export class AlgorithmsModule { }
