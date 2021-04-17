/* tslint:disable */
import { ClientDto } from './client-dto';
import { LigneCommandeClientDto } from './ligne-commande-client-dto';
export interface CommandeClientDto {
  id?: number;
  code?: string;
  dateCommande?: number;
  etatCommande?: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
  client?: ClientDto;
  idEntreprise?: number;
  ligneCommandeClients?: Array<LigneCommandeClientDto>;
  commandeLivree?: boolean;
}
