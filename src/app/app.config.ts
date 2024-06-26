import { Injectable } from '@angular/core'

@Injectable()
export class AppConfig{
    static readonly api_url: string = 'http://localhost:3000/';
}