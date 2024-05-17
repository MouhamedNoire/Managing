import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormulaireInscriptionService } from "../services/formulaire-inscription.service";
import { Utilisateur } from "../models/utilisateur";
import { MatTableDataSource } from "@angular/material/table";
import {DialogComponent} from "../dialog/dialog.component";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  userService = inject(FormulaireInscriptionService);
  dataSource!: MatTableDataSource<Utilisateur>;
  displayedColumns: string[] = ['id', 'prenom', 'nom', 'actions'];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUser().subscribe({
      next: value => {
        this.dataSource = new MatTableDataSource(value);
      }
    });
  }

  deleteUser(userId: number) {
    this.userService.deleteUser(userId).subscribe({
      next: () => {
        this.loadUsers(); // Reload the user list after deletion
      }
    });
  }

  openUpdateDialog(user: Utilisateur) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Map form values to match the order expected by the updateUser method
        const updatedUser = {
          nom: result.nom,
          prenom: result.prenom,
          email: result.email,
          password: result.password // Assuming password is also included in the dialog form
        };

        this.userService.updateUser(user.id, updatedUser).subscribe({
          next: () => {
            this.loadUsers(); // Reload the user list after update
          }
        });
      }
    });
  }
}
