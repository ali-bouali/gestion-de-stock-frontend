/* tslint:disable */
import { AdresseDto } from './adresse-dto';
import { EntrepriseDto } from './entreprise-dto';
import { RolesDto } from './roles-dto';
export interface UtilisateurDto {
  id?: number;
  nom?: string;
  prenom?: string;
  email?: string;
  dateDeNaissance?: number;
  moteDePasse?: string;
  adresse?: AdresseDto;
  photo?: string;
  entreprise?: EntrepriseDto;
  roles?: Array<RolesDto>;
}
