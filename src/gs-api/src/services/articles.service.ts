/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ArticleDto } from '../models/article-dto';
import { LigneCommandeClientDto } from '../models/ligne-commande-client-dto';
import { LigneCommandeFournisseurDto } from '../models/ligne-commande-fournisseur-dto';
import { LigneVenteDto } from '../models/ligne-vente-dto';
@Injectable({
  providedIn: 'root',
})
class ArticlesService extends __BaseService {
  static readonly findAllPath = '/gestiondestock/v1/articles/all';
  static readonly savePath = '/gestiondestock/v1/articles/create';
  static readonly deletePath = '/gestiondestock/v1/articles/delete/{idArticle}';
  static readonly findAllArticleByIdCategoryPath = '/gestiondestock/v1/articles/filter/category/{idCategory}';
  static readonly findByCodeArticlePath = '/gestiondestock/v1/articles/filter/{codeArticle}';
  static readonly findHistoriaueCommandeClientPath = '/gestiondestock/v1/articles/historique/commandeclient/{idArticle}';
  static readonly findHistoriqueCommandeFournisseurPath = '/gestiondestock/v1/articles/historique/commandefournisseur/{idArticle}';
  static readonly findHistoriqueVentesPath = '/gestiondestock/v1/articles/historique/vente/{idArticle}';
  static readonly findByIdPath = '/gestiondestock/v1/articles/{idArticle}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Cette methode permet de chercher et renvoyer la liste des articles qui existent dans la BDD
   * @return La liste des article / Une liste vide
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<ArticleDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/articles/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ArticleDto>>;
      })
    );
  }
  /**
   * Cette methode permet de chercher et renvoyer la liste des articles qui existent dans la BDD
   * @return La liste des article / Une liste vide
   */
  findAll(): __Observable<Array<ArticleDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<ArticleDto>)
    );
  }

  /**
   * Cette methode permet d'enregistrer ou modifier un article
   * @param body undefined
   * @return L'objet article cree / modifie
   */
  saveResponse(body?: ArticleDto): __Observable<__StrictHttpResponse<ArticleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/articles/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ArticleDto>;
      })
    );
  }
  /**
   * Cette methode permet d'enregistrer ou modifier un article
   * @param body undefined
   * @return L'objet article cree / modifie
   */
  save(body?: ArticleDto): __Observable<ArticleDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as ArticleDto)
    );
  }

  /**
   * Cette methode permet de supprimer un article par ID
   * @param idArticle undefined
   */
  deleteResponse(idArticle: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/articles/delete/${idArticle}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Cette methode permet de supprimer un article par ID
   * @param idArticle undefined
   */
  delete(idArticle: number): __Observable<null> {
    return this.deleteResponse(idArticle).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param idCategory undefined
   * @return successful operation
   */
  findAllArticleByIdCategoryResponse(idCategory: number): __Observable<__StrictHttpResponse<Array<ArticleDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/articles/filter/category/${idCategory}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ArticleDto>>;
      })
    );
  }
  /**
   * @param idCategory undefined
   * @return successful operation
   */
  findAllArticleByIdCategory(idCategory: number): __Observable<Array<ArticleDto>> {
    return this.findAllArticleByIdCategoryResponse(idCategory).pipe(
      __map(_r => _r.body as Array<ArticleDto>)
    );
  }

  /**
   * Cette methode permet de chercher un article par son CODE
   * @param codeArticle undefined
   * @return L'article a ete trouve dans la BDD
   */
  findByCodeArticleResponse(codeArticle: string): __Observable<__StrictHttpResponse<ArticleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/articles/filter/${codeArticle}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ArticleDto>;
      })
    );
  }
  /**
   * Cette methode permet de chercher un article par son CODE
   * @param codeArticle undefined
   * @return L'article a ete trouve dans la BDD
   */
  findByCodeArticle(codeArticle: string): __Observable<ArticleDto> {
    return this.findByCodeArticleResponse(codeArticle).pipe(
      __map(_r => _r.body as ArticleDto)
    );
  }

  /**
   * @param idArticle undefined
   * @return successful operation
   */
  findHistoriaueCommandeClientResponse(idArticle: number): __Observable<__StrictHttpResponse<Array<LigneCommandeClientDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/articles/historique/commandeclient/${idArticle}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneCommandeClientDto>>;
      })
    );
  }
  /**
   * @param idArticle undefined
   * @return successful operation
   */
  findHistoriaueCommandeClient(idArticle: number): __Observable<Array<LigneCommandeClientDto>> {
    return this.findHistoriaueCommandeClientResponse(idArticle).pipe(
      __map(_r => _r.body as Array<LigneCommandeClientDto>)
    );
  }

  /**
   * @param idArticle undefined
   * @return successful operation
   */
  findHistoriqueCommandeFournisseurResponse(idArticle: number): __Observable<__StrictHttpResponse<Array<LigneCommandeFournisseurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/articles/historique/commandefournisseur/${idArticle}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneCommandeFournisseurDto>>;
      })
    );
  }
  /**
   * @param idArticle undefined
   * @return successful operation
   */
  findHistoriqueCommandeFournisseur(idArticle: number): __Observable<Array<LigneCommandeFournisseurDto>> {
    return this.findHistoriqueCommandeFournisseurResponse(idArticle).pipe(
      __map(_r => _r.body as Array<LigneCommandeFournisseurDto>)
    );
  }

  /**
   * @param idArticle undefined
   * @return successful operation
   */
  findHistoriqueVentesResponse(idArticle: number): __Observable<__StrictHttpResponse<Array<LigneVenteDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/articles/historique/vente/${idArticle}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneVenteDto>>;
      })
    );
  }
  /**
   * @param idArticle undefined
   * @return successful operation
   */
  findHistoriqueVentes(idArticle: number): __Observable<Array<LigneVenteDto>> {
    return this.findHistoriqueVentesResponse(idArticle).pipe(
      __map(_r => _r.body as Array<LigneVenteDto>)
    );
  }

  /**
   * Cette methode permet de chercher un article par son ID
   * @param idArticle undefined
   * @return L'article a ete trouve dans la BDD
   */
  findByIdResponse(idArticle: number): __Observable<__StrictHttpResponse<ArticleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/articles/${idArticle}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ArticleDto>;
      })
    );
  }
  /**
   * Cette methode permet de chercher un article par son ID
   * @param idArticle undefined
   * @return L'article a ete trouve dans la BDD
   */
  findById(idArticle: number): __Observable<ArticleDto> {
    return this.findByIdResponse(idArticle).pipe(
      __map(_r => _r.body as ArticleDto)
    );
  }
}

module ArticlesService {
}

export { ArticlesService }
