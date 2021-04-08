import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {UtilisateurDto} from '../../../gs-api/src/models/utilisateur-dto';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  connectedUser: UtilisateurDto = {};

  constructor(
    private userService: UserService
  ) { }

  async ngOnInit(): Promise<void> {
    this.connectedUser = await this.userService.getConnectedUser();
  }

}
