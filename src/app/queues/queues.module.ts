import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QueueComponent } from './queue/queue.component';
import { QueueDisplayComponent } from './queue-display/queue-display.component';

const routes: Routes = [
  {
    path: '',
    component: QueueComponent
  }
];

@NgModule({
  declarations: [QueueComponent, QueueDisplayComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [QueueComponent, QueueDisplayComponent]
})
export class QueuesModule { }
