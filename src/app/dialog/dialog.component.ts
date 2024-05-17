import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Utilisateur} from "../models/utilisateur";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  updateUserForm : FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data : Utilisateur,
    private fb : FormBuilder
  ) {
    this.updateUserForm = this.fb.group({
      prenom:[data.prenom, Validators.required],
      nom:[data.nom,Validators.required],
      email:[data.email, Validators.required],
      password:[data.password]
    });
  }

  onCancel(){
    this.dialogRef.close()
  }

  onUpdate(){
    if (this.updateUserForm.valid){
      this.dialogRef.close(this.updateUserForm.value)
    }
  }
}
