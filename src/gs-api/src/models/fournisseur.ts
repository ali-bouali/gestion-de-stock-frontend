/* tslint:disable */
import { Adresse } from './adresse';
import { CommandeFournisseur } from './commande-fournisseur';
export interface Fournisseur {
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
  commandeFournisseurs?: Array<CommandeFournisseur>;
}
