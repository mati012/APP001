import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
 public authenthicationService: AuthGuardService,
 public router: Router
  ) { }
  canActivate(): boolean{
    return this.authenthicationService.isAuthenticated();
  }
}
