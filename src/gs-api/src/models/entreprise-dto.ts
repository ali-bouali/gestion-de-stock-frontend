/* tslint:disable */
import { AdresseDto } from './adresse-dto';
export interface EntrepriseDto {
  id?: number;
  nom?: string;
  description?: string;
  adresse?: AdresseDto;
  codeFiscal?: string;
  photo?: string;
  email?: string;
  numTel?: string;
  steWeb?: string;
}
