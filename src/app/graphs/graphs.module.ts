import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GraphComponent } from './graph/graph.component';
import { GraphDisplayComponent } from './graph-display/graph-display.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: GraphComponent
  }
];

@NgModule({
  declarations: [
    GraphComponent,
    GraphDisplayComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    GraphComponent,
    GraphDisplayComponent
  ]
})
export class GraphsModule { }
