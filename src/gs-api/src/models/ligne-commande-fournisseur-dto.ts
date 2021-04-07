/* tslint:disable */
import { ArticleDto } from './article-dto';
import { CommandeFournisseur } from './commande-fournisseur';
export interface LigneCommandeFournisseurDto {
  id?: number;
  article?: ArticleDto;
  commandeFournisseur?: CommandeFournisseur;
  quantite?: number;
  prixUnitaire?: number;
  idEntreprise?: number;
}
