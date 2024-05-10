import {Component, inject, OnInit} from '@angular/core';
import {MatMenuItem, MatMenuModule, MatMenuTrigger} from "@angular/material/menu";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  public authService = inject(AuthService)
  private router = inject(Router)
  ngOnInit(): void {
  }
  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login')

  }
}
