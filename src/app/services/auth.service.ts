import { Injectable } from '@angular/core';
import {FormulaireInscriptionService} from "./formulaire-inscription.service";
import {Utilisateur} from "../models/utilisateur";
import {firstValueFrom, lastValueFrom, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private userService : FormulaireInscriptionService) { }

  async login(email: string, password: string): Promise<Utilisateur | null> {
    try {
      const users = await lastValueFrom(this.userService.getUser());
      const loggedInUser = users.find(user => user.email === email && user.password === password);
      return loggedInUser || null;
    } catch (error) {
      console.error('Error logging in:', error);
      return null;
    }
  }
}
