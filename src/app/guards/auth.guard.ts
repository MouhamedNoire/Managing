import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  GuardResult,
  MaybeAsync, Router,
  RouterStateSnapshot
} from '@angular/router';
import {inject, Injectable} from "@angular/core";
import {AuthService} from "../services/auth.service";

@Injectable()
export class AuthGuard{
  private authService = inject(AuthService)
  private router  = inject(Router)

  canActivate(route:ActivatedRouteSnapshot,
              state:RouterStateSnapshot): MaybeAsync<GuardResult>{
    return this.authService.isAuthenticated ? true : (this.router.navigateByUrl('/login'), false)
  }
}
