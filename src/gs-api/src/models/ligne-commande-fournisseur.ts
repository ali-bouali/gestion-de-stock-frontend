/* tslint:disable */
import { Article } from './article';
import { CommandeFournisseur } from './commande-fournisseur';
export interface LigneCommandeFournisseur {
  id?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  article?: Article;
  commandeFournisseur?: CommandeFournisseur;
  quantite?: number;
  prixUnitaire?: number;
  idEntreprise?: number;
}
