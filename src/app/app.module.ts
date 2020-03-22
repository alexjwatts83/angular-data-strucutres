import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BinarySearchTreesModule } from './binary-search-trees';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ArraysModule } from './arrays';
import { LinkedListsModule } from './linked-lists';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BinarySearchTreesModule,
    ArraysModule,
    LinkedListsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
