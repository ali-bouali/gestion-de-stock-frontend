/* tslint:disable */
import { VentesDto } from './ventes-dto';
import { ArticleDto } from './article-dto';
export interface LigneVenteDto {
  id?: number;
  vente?: VentesDto;
  article?: ArticleDto;
  quantite?: number;
  prixUnitaire?: number;
  idEntreprise?: number;
}
