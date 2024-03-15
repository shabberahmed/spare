import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { userReducer } from './store/reducer';
const route:Routes=[
  {path:'', redirectTo:'/', pathMatch:'full'},
  {path:'', component:AppComponent},
  {path:'home', component:HomeComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({user:userReducer}),
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
