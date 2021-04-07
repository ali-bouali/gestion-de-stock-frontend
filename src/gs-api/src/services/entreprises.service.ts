/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EntrepriseDto } from '../models/entreprise-dto';
@Injectable({
  providedIn: 'root',
})
class EntreprisesService extends __BaseService {
  static readonly findAllPath = '/gestiondestock/v1/entreprises/all';
  static readonly savePath = '/gestiondestock/v1/entreprises/create';
  static readonly deletePath = '/gestiondestock/v1/entreprises/delete/{idEntreprise}';
  static readonly findByIdPath = '/gestiondestock/v1/entreprises/{idEntreprise}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<EntrepriseDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/entreprises/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<EntrepriseDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll(): __Observable<Array<EntrepriseDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<EntrepriseDto>)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveResponse(body?: EntrepriseDto): __Observable<__StrictHttpResponse<EntrepriseDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/entreprises/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EntrepriseDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  save(body?: EntrepriseDto): __Observable<EntrepriseDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as EntrepriseDto)
    );
  }

  /**
   * @param idEntreprise undefined
   */
  deleteResponse(idEntreprise: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/entreprises/delete/${idEntreprise}`,
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
   * @param idEntreprise undefined
   */
  delete(idEntreprise: number): __Observable<null> {
    return this.deleteResponse(idEntreprise).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param idEntreprise undefined
   * @return successful operation
   */
  findByIdResponse(idEntreprise: number): __Observable<__StrictHttpResponse<EntrepriseDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/entreprises/${idEntreprise}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EntrepriseDto>;
      })
    );
  }
  /**
   * @param idEntreprise undefined
   * @return successful operation
   */
  findById(idEntreprise: number): __Observable<EntrepriseDto> {
    return this.findByIdResponse(idEntreprise).pipe(
      __map(_r => _r.body as EntrepriseDto)
    );
  }
}

module EntreprisesService {
}

export { EntreprisesService }
