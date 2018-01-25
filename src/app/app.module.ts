import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.route';
import { Routes, RouterModule } from '@angular/router';
import { Animationomponent } from './animation/animation.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Animationomponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

