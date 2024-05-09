import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {
    path:'formulaire',
    component:FormulaireComponent
  },
  {
    path:'home',
    component:HomeComponent, children:[]
  },
  {
    path:'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
