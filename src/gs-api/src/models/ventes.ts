/* tslint:disable */
import { LigneVente } from './ligne-vente';
export interface Ventes {
  id?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  code?: string;
  dateVente?: number;
  commentaire?: string;
  idEntreprise?: number;
  ligneVentes?: Array<LigneVente>;
}
