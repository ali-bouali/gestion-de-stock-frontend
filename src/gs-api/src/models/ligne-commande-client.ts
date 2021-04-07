/* tslint:disable */
import { Article } from './article';
import { CommandeClient } from './commande-client';
export interface LigneCommandeClient {
  id?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  article?: Article;
  commandeClient?: CommandeClient;
  quantite?: number;
  prixUnitaire?: number;
  idEntreprise?: number;
}
