import { SharedService } from 'src/app/services/shared.service';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class CrudService {
    constructor(
        private ApiService: ApiService,
        private sharedService: SharedService,
    ) {}

    async get (url: string): Promise<any> {
        //const encodedExpValue = encodeURIComponent(JSON.stringify(params));
        //const url = "api/v1/users/" + encodedExpValue;
        return new Promise<any>((resolve, reject) => {
            this.ApiService.get(url, true).subscribe(
                (respuesta) => {
                    resolve(respuesta);
                },
                (error) => {
                    this.sharedService.validityToken(error)
                    reject(error);
                }
            );
        });
    }
    
    async put (params: any): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.ApiService.put(params.url, params.body, true).subscribe(
                (respuesta) => {
                    resolve(respuesta);
                },
                (error) => {
                    this.sharedService.validityToken(error)
                    reject(error);
                }
            );
        });
    }

    async post (params: any): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.ApiService.post(params.url, params.body, true).subscribe(
                (respuesta) => {
                    resolve(respuesta);
                },
                (error) => {
                    this.sharedService.validityToken(error)
                    reject(error);
                }
            );
        });
    }

    async delete (url: string): Promise<any> {
        //const encodedExpValue = encodeURIComponent(JSON.stringify(params));
        //const url = "api/v1/users/" + encodedExpValue;
        return new Promise<any>((resolve, reject) => {
            this.ApiService.delete(url, true).subscribe(
                (respuesta) => {
                    resolve(respuesta);
                },
                (error) => {
                    this.sharedService.validityToken(error)
                    reject(error);
                }
            );
        });
    }
}