import { Injectable } from '@angular/core';
import {FormulaireInscriptionService} from "./formulaire-inscription.service";
import {Utilisateur} from "../models/utilisateur";
import {lastValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users : Utilisateur[] = []
  constructor(private userService : FormulaireInscriptionService) { }

  login(email:string, password : string) : Utilisateur | null{
    this.userService.getUser().subscribe((users)=>{
      this.users = users
      })

     const userfound = this.users.find((user)=>{
      user.email === email && user.password === password;
    })
    return userfound || null;
  }
}
