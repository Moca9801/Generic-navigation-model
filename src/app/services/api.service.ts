import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from '../app.config';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { SharedService } from './shared.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api_url: string;

  constructor(private http: HttpClient, private cookieService: CookieService, private sharedService: SharedService, private router: Router ) {
    this.api_url = AppConfig.api_url;
  }

  private getHeaders(isLogged: boolean): HttpHeaders {
    let headers = new HttpHeaders();
    if (isLogged) {
      const COOKIE_TOKEN = this.cookieService.get('TOKEN');
      headers = headers.set('Authorization', 'Bearer ' + COOKIE_TOKEN);
    }
    return headers;
  }

  private getRequestOptions(isLogged: boolean): { headers?: HttpHeaders; observe: 'response' } {
    return isLogged ? { headers: this.getHeaders(true), observe: 'response' } : { observe: 'response' };
  }


  get(url: string, isLogged: boolean): Observable<any> {
    const response = this.http.get(this.api_url + url, this.getRequestOptions(isLogged));
    return response;
  }

  post(url: string, body: any, isLogged: boolean): Observable<any> {
    const response = this.http.post(this.api_url + url, body, this.getRequestOptions(isLogged));
    return response;
  }

  put(url: string, body: any, isLogged: boolean): Observable<any> {
    const response = this.http.put(this.api_url + url, body, this.getRequestOptions(isLogged));
    return response;
  }

  delete(url: string, isLogged: boolean): Observable<any> {
    const response = this.http.delete(this.api_url + url, this.getRequestOptions(isLogged));
    return response;  
  }
}

