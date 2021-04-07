/* tslint:disable */
import { Article } from './article';
export interface Category {
  id?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  code?: string;
  designation?: string;
  idEntreprise?: number;
  articles?: Array<Article>;
}
