/* tslint:disable */
import { ArticleDto } from './article-dto';
export interface LigneCommandeClientDto {
  id?: number;
  article?: ArticleDto;
  quantite?: number;
  prixUnitaire?: number;
  idEntreprise?: number;
}
