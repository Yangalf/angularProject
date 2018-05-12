import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatCardModule
} from '@angular/material';


import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { MinicartComponent } from './components/minicart/minicart.component';

const Routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'minicart', component: MinicartComponent },
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: '**', component:  PageNotFoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    MinicartComponent,
  ],
  imports: [
    RouterModule.forRoot(Routes),
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



