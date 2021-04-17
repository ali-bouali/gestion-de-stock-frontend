import { Injectable } from '@angular/core';
import {UserService} from '../user/user.service';
import {ClientsService} from '../../../gs-api/src/services/clients.service';
import {FournisseurService} from '../../../gs-api/src/services/fournisseur.service';
import {ClientDto} from '../../../gs-api/src/models/client-dto';
import {Observable, of} from 'rxjs';
import {FournisseurDto} from '../../../gs-api/src/models/fournisseur-dto';


@Injectable({
  providedIn: 'root'
})
export class CltfrsService {

  constructor(
    private userService: UserService,
    private clientService: ClientsService,
    private fournisseurService: FournisseurService
  ) { }

  enregistrerClient(clientDto: ClientDto): Observable<ClientDto> {
    clientDto.idEntreprise = this.userService.getConnectedUser().entreprise?.id;
    return this.clientService.save(clientDto);
  }

  enregistrerFournisseur(fournisseurDto: FournisseurDto): Observable<FournisseurDto> {
    fournisseurDto.idEntreprise = this.userService.getConnectedUser().entreprise?.id;
    return this.fournisseurService.save(fournisseurDto);
  }

  findAllClients(): Observable<ClientDto[]> {
    return this.clientService.findAll();
  }

  findAllFournisseurs(): Observable<FournisseurDto[]> {
    return this.fournisseurService.findAll();
  }

  findClientById(id: number): Observable<ClientDto> {
    if (id) {
      return this.clientService.findById(id);
    }
    return of();
  }

  findFournisseurById(id: number): Observable<FournisseurDto> {
    if (id) {
      return this.fournisseurService.findById(id);
    }
    return of();
  }

  deleteClient(idClient: number): Observable<any> {
    if (idClient) {
      return this.clientService.delete(idClient);
    }
    return of();
  }

  deleteFournisseur(idFournisseur: number): Observable<any> {
    if (idFournisseur) {
      return this.fournisseurService.delete(idFournisseur);
    }
    return of();
  }
}
