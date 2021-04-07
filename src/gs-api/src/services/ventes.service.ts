/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { VentesDto } from '../models/ventes-dto';
@Injectable({
  providedIn: 'root',
})
class VentesService extends __BaseService {
  static readonly findAllPath = '/gestiondestock/v1/ventes/all';
  static readonly savePath = '/gestiondestock/v1/ventes/create';
  static readonly deletePath = '/gestiondestock/v1/ventes/delete/{idVente}';
  static readonly findByCodePath = '/gestiondestock/v1/ventes/{codeVente}';
  static readonly findByIdPath = '/gestiondestock/v1/ventes/{idVente}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<VentesDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/ventes/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<VentesDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll(): __Observable<Array<VentesDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<VentesDto>)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveResponse(body?: VentesDto): __Observable<__StrictHttpResponse<VentesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/ventes/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<VentesDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  save(body?: VentesDto): __Observable<VentesDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as VentesDto)
    );
  }

  /**
   * @param idVente undefined
   */
  deleteResponse(idVente: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/ventes/delete/${idVente}`,
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
   * @param idVente undefined
   */
  delete(idVente: number): __Observable<null> {
    return this.deleteResponse(idVente).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param codeVente undefined
   * @return successful operation
   */
  findByCodeResponse(codeVente: string): __Observable<__StrictHttpResponse<VentesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/ventes/${codeVente}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<VentesDto>;
      })
    );
  }
  /**
   * @param codeVente undefined
   * @return successful operation
   */
  findByCode(codeVente: string): __Observable<VentesDto> {
    return this.findByCodeResponse(codeVente).pipe(
      __map(_r => _r.body as VentesDto)
    );
  }

  /**
   * @param idVente undefined
   * @return successful operation
   */
  findByIdResponse(idVente: number): __Observable<__StrictHttpResponse<VentesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/ventes/${idVente}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<VentesDto>;
      })
    );
  }
  /**
   * @param idVente undefined
   * @return successful operation
   */
  findById(idVente: number): __Observable<VentesDto> {
    return this.findByIdResponse(idVente).pipe(
      __map(_r => _r.body as VentesDto)
    );
  }
}

module VentesService {
}

export { VentesService }
