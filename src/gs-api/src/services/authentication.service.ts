/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AuthenticationResponse } from '../models/authentication-response';
import { AuthenticationRequest } from '../models/authentication-request';
@Injectable({
  providedIn: 'root',
})
class AuthenticationService extends __BaseService {
  static readonly authenticatePath = '/gestiondestock/v1/auth/authenticate';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  authenticateResponse(body?: AuthenticationRequest): __Observable<__StrictHttpResponse<AuthenticationResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/auth/authenticate`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthenticationResponse>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  authenticate(body?: AuthenticationRequest): __Observable<AuthenticationResponse> {
    return this.authenticateResponse(body).pipe(
      __map(_r => _r.body as AuthenticationResponse)
    );
  }
}

module AuthenticationService {
}

export { AuthenticationService }
