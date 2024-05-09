import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormulaireInscriptionService} from "../services/formulaire-inscription.service";
import {map, tap} from "rxjs";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {Utilisateur} from "../models/utilisateur";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements  OnInit{
  userList : Utilisateur[] = []
  loginForm !: FormGroup;
  formBuilder = inject(FormBuilder)
  router = inject(Router)
  constructor(private userService: FormulaireInscriptionService, private authService : AuthService) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null,[Validators.required]],
      password:[null,[Validators.required]]
    })
    this.userService.getUser().subscribe((users)=>{
      this.userList = users;
    })
  }

  onSubmitForm() {
    const { email, password } = this.loginForm.value;
    try {
      const loggedInUser = this.authService.login(email, password);
      console.log()
      if (loggedInUser) {
        console.log('User found:', loggedInUser);
        this.router.navigateByUrl('/home');
      } else {
        console.log('User not found');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  }


}
