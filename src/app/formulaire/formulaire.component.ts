import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormulaireInscriptionService } from '../services/formulaire-inscription.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css'
})
export class FormulaireComponent {
  constructor(private router: Router,
    private formulaireService : FormulaireInscriptionService
  ){

  }
  prenom !: string;
  nom !: string;
  email !: string;
  password !: string;

  addForm(form: NgForm){
    this.formulaireService.addUser(form.value).subscribe(user=>{
      console.log('user added ', user)
    })
    this.router.navigateByUrl('home')
  }
}
