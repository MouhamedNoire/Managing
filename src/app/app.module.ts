import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatButton} from '@angular/material/button';
import { MatDividerModule} from '@angular/material/divider';
import{MatDialogModule} from "@angular/material/dialog";
import { HomeComponent } from './home/home.component'
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {MatList, MatListItem} from "@angular/material/list";
import { LoginComponent } from './login/login.component';
import {AuthGuard} from "./guards/auth.guard";
import { ListUserComponent } from './list-user/list-user.component';
import {MatTableModule} from "@angular/material/table";
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    HomeComponent,
    LoginComponent,
    ListUserComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatButton,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButton,
    MatDividerModule,
    HttpClientModule,
    MatIconButton,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatList,
    MatListItem,
    MatInputModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [provideAnimationsAsync(), AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
