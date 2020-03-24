import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { 
    path: 'arrays',
    loadChildren: () => 
      import('./arrays/arrays.module')
      .then(m => m.ArraysModule)
  },
  { 
    path: 'hashes',
    loadChildren: () => 
      import('./hashes/hashes.module')
      .then(m => m.HashesModule)
  },
  { 
    path: 'linked-lists',
    loadChildren: () => 
      import('./linked-lists/linked-lists.module')
      .then(m => m.LinkedListsModule)
  },
  { 
    path: 'linked-lists/singly',
    loadChildren: () => 
      import('./linked-lists/linked-lists.module')
      .then(m => m.LinkedListsModule)
  },
  { 
    path: 'linked-lists/doubly',
    loadChildren: () => 
      import('./linked-lists/linked-lists.module')
      .then(m => m.LinkedListsModule)
  },
  { 
    path: 'stacks',
    loadChildren: () => 
      import('./stacks/stacks.module')
      .then(m => m.StacksModule)
  },
  { 
    path: 'binary-search-trees',
    loadChildren: () => 
      import('./binary-search-trees/binary-search-trees.module')
      .then(m => m.BinarySearchTreesModule)
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
