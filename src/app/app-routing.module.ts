import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./guards/auth.guard";
import {ListUserComponent} from "./list-user/list-user.component";

// @ts-ignore
// @ts-ignore
const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'formulaire',
    component:FormulaireComponent
  },
  {
    path:'home',
    canActivate : [AuthGuard],
    component:HomeComponent, children:[
      {
        path:'list-user',
        component:ListUserComponent
      }
    ]
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
