import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { ShowtodoComponent } from './showtodo/showtodo.component';

@NgModule({
  declarations: [
    AppComponent,
    AddtodoComponent,
    ShowtodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
