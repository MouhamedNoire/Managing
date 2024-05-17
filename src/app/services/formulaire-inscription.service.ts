import { Injectable } from '@angular/core';
import { Utilisateur } from '../models/utilisateur';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FormulaireInscriptionService {
  userData: Observable<Utilisateur[]> = this.getUser();
  allUsers!: Utilisateur[];
  private api = (environment as any).backendHost;

  constructor(private http: HttpClient) {}

  addUser(formValue: { nom: string; prenom: string; email: string; password: string }): Observable<Utilisateur> {
    const user: Utilisateur = {
      ...formValue,
      id: this.generateId()
    };
    return this.http.post<Utilisateur>(`${this.api}/users`, user);
  }

  getUser(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${this.api}/users`);
  }

  generateId() {
    return Math.floor(Math.random() * 100);
  }

  login(email: string, password: string) {
    return this.userData.pipe(
      map(users => {
        const foundUser = users.find(user => user.email === email && user.password === password);
        return foundUser ? foundUser : 'user not found';
      })
    );
  }

  // Method to delete a user by ID
  deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/users/${userId}`);
  }

  // Method to update a user by ID
  updateUser(userId: number, formValue: { nom?: string; prenom?: string; email?: string; password?: string }): Observable<Utilisateur> {
    return this.http.put<Utilisateur>(`${this.api}/users/${userId}`, formValue);
  }

  // Method to get a user by ID
  getUserById(userId: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.api}/users/${userId}`);
  }
}
