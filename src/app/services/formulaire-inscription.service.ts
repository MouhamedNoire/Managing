import { inject, Injectable } from '@angular/core';
import { Utilisateur } from '../models/utilisateur';
import { HttpClient } from '@angular/common/http';
import {map, Observable, pipe, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormulaireInscriptionService {
  userData : Observable<Utilisateur[]> = this.getUser();
  allUsers !: Utilisateur[]
  private api = 'http://localhost:3000'
  /** its the same than the dependancy injection by constructor */
  constructor(private http : HttpClient
  ){}


  addUser(formvalue :{nom:string, prenom:string, email:string, password:string}) : Observable<Utilisateur>{
    const user : Utilisateur = {
      ...formvalue,
      created_at:new Date(),
      id: this.generateId()
    }

    return this.http.post<Utilisateur>(`${this.api}/users`,user);
  }

  getUser() : Observable<Utilisateur[]>{
    return this.http.get<Utilisateur[]>(`${this.api}/users`);
  }

  generateId(){
    return Math.floor(Math.random() *100)
  }


  login(email: string, password: string) {
     const foundUser = this.userData.subscribe(pipe((users=>{
       const foundUser = users.find(user => user.email === email && user.password === password);
       return foundUser ? foundUser : 'user not found';
     })))
    console.log(foundUser)
    return foundUser;
  }


}
