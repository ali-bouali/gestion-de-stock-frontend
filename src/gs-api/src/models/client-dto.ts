/* tslint:disable */
import { AdresseDto } from './adresse-dto';
export interface ClientDto {
  id?: number;
  nom?: string;
  prenom?: string;
  adresse?: AdresseDto;
  photo?: string;
  mail?: string;
  numTel?: string;
  idEntreprise?: number;
}
