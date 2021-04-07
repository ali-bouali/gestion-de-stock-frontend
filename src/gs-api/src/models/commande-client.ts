/* tslint:disable */
import { Client } from './client';
import { LigneCommandeClient } from './ligne-commande-client';
export interface CommandeClient {
  id?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  code?: string;
  dateCommande?: number;
  etatCommande?: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
  idEntreprise?: number;
  client?: Client;
  ligneCommandeClients?: Array<LigneCommandeClient>;
}
