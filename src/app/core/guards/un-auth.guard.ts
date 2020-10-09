import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../http';
import { Location } from '@angular/common';

@Injectable()
export class UnAuthGuard implements CanActivate {

constructor(
  private authService: AuthService,
  private router: Router,
  private location: Location
) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    let isAuth = true;
    if (!!this.authService.getToken()) {
      isAuth = false;
      this.authService.authenticatedUser();
      this.router.navigate(['/economy/buildings/buildingsTable']);
      }
    return isAuth;
  }
}

