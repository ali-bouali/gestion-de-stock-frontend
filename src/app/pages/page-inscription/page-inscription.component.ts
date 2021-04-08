import { Component, OnInit } from '@angular/core';
import {EntrepriseDto} from '../../../gs-api/src/models/entreprise-dto';
import {EntrepriseService} from '../../services/entreprise/entreprise.service';
import {AdresseDto} from '../../../gs-api/src/models/adresse-dto';
import {UserService} from '../../services/user/user.service';
import {AuthenticationRequest} from '../../../gs-api/src/models/authentication-request';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-inscription',
  templateUrl: './page-inscription.component.html',
  styleUrls: ['./page-inscription.component.scss']
})
export class PageInscriptionComponent implements OnInit {

  entrepriseDto: EntrepriseDto = {};
  adresse: AdresseDto = {};
  errorsMsg: Array<string> = [];

  constructor(
    private entrepriseService: EntrepriseService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  inscrire(): void {
    this.entrepriseDto.adresse = this.adresse;
    this.entrepriseService.sinscrire(this.entrepriseDto)
    .subscribe(entrepriseDto => {
      this.connectEntreprise();
    }, error => {
      this.errorsMsg = error.error.errors;
      });
  }

  connectEntreprise(): void {
    const authenticationRequest: AuthenticationRequest = {
      login: this.entrepriseDto.email,
      password: 'som3R@nd0mP@$$word'
    };
    this.userService.login(authenticationRequest)
    .subscribe(response => {
      this.userService.setAccessToken(response);
      this.getUserByEmail(authenticationRequest.login);
      localStorage.setItem('origin', 'inscription');
      this.router.navigate(['changermotdepasse']);
    });
  }

  getUserByEmail(email?: string): void {
    this.userService.getUserByEmail(email)
    .subscribe(user => {
      this.userService.setConnectedUser(user);
    });
  }
}
