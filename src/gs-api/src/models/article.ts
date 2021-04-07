/* tslint:disable */
import { Category } from './category';
import { LigneVente } from './ligne-vente';
import { LigneCommandeClient } from './ligne-commande-client';
import { LigneCommandeFournisseur } from './ligne-commande-fournisseur';
import { MvtStk } from './mvt-stk';
export interface Article {
  id?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  codeArticle?: string;
  designation?: string;
  prixUnitaireHt?: number;
  tauxTva?: number;
  prixUnitaireTtc?: number;
  photo?: string;
  idEntreprise?: number;
  category?: Category;
  ligneVentes?: Array<LigneVente>;
  ligneCommandeClients?: Array<LigneCommandeClient>;
  ligneCommandeFournisseurs?: Array<LigneCommandeFournisseur>;
  mvtStks?: Array<MvtStk>;
}
