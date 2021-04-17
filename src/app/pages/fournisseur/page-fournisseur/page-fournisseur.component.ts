import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CltfrsService} from '../../../services/cltfrs/cltfrs.service';
import {ClientDto} from '../../../../gs-api/src/models/client-dto';
import {FournisseurDto} from '../../../../gs-api/src/models/fournisseur-dto';

@Component({
  selector: 'app-page-fournisseur',
  templateUrl: './page-fournisseur.component.html',
  styleUrls: ['./page-fournisseur.component.scss']
})
export class PageFournisseurComponent implements OnInit {

  listFournisseur: Array<FournisseurDto> = [];
  errorMsg = '';

  constructor(
    private router: Router,
    private cltFrsService: CltfrsService
  ) { }

  ngOnInit(): void {
    this.findAllFournisseurs();
  }

  findAllFournisseurs(): void {
    this.cltFrsService.findAllFournisseurs()
    .subscribe(fournisseurs => {
      this.listFournisseur = fournisseurs;
    });
  }

  nouveauFournisseur(): void {
    this.router.navigate(['nouveaufournisseur']);
  }

  handleSuppression(event: any): void {
    if (event === 'success') {
      this.findAllFournisseurs();
    } else {
      this.errorMsg = event;
    }
  }
}
