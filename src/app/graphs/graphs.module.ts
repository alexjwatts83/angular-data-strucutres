import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GraphComponent } from './graph/graph.component';
import { GraphDisplayComponent } from './graph-display/graph-display.component';
import { FormsModule } from '@angular/forms';
import { GraphInfoComponent } from './graph-info/graph-info.component';
import { GraphExampleComponent } from './graph-example/graph-example.component';

const routes: Routes = [
  {
    path: '',
    component: GraphComponent
  }
];

@NgModule({
  declarations: [
    GraphComponent,
    GraphDisplayComponent,
    GraphInfoComponent,
    GraphExampleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    GraphComponent,
    GraphDisplayComponent,
    GraphInfoComponent,
    GraphExampleComponent
  ]
})
export class GraphsModule { }
