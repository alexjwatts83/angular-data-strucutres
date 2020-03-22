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
