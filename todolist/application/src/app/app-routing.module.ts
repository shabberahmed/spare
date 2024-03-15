import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { ShowtodoComponent } from './showtodo/showtodo.component';

const routes: Routes = [
  {path:'addtodo',component:AddtodoComponent},
  {path:'show',component:ShowtodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
