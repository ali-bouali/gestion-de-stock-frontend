import { Injectable } from '@angular/core';
import {AuthenticationService} from '../../../gs-api/src/services/authentication.service';
import {AuthenticationRequest} from '../../../gs-api/src/models/authentication-request';
import {Observable} from 'rxjs';
import {AuthenticationResponse} from '../../../gs-api/src/models/authentication-response';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }


  login(authenticationRequest: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.authenticationService.authenticate(authenticationRequest);
  }

  setConnectedUser(authenticationResponse: AuthenticationResponse): void {
    localStorage.setItem('connectedUser', JSON.stringify(authenticationResponse));
  }

  // TODO
  isUserLoggedAndAccessTokenValid(): boolean {
    if (localStorage.getItem('connectedUser')) {
      // TODO il faut verifier si le access token est valid
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
