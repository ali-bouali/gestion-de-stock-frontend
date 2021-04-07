/* tslint:disable */
import { Adresse } from './adresse';
import { CommandeClient } from './commande-client';
export interface Client {
  id?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  nom?: string;
  prenom?: string;
  adresse?: Adresse;
  photo?: string;
  mail?: string;
  numTel?: string;
  idEntreprise?: number;
  commandeClients?: Array<CommandeClient>;
}
