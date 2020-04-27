import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreesModule } from './trees/trees.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ArraysModule } from './arrays';
import { LinkedListsModule } from './linked-lists';

/* d3 */
import { D3Service } from './d3';
import { D3Module } from './d3/d3.module';
import { GraphsModule } from './graphs';
// import { D3Module } from './d3/d3.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    TreesModule,
    ArraysModule,
    LinkedListsModule,
    D3Module,
    GraphsModule
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
