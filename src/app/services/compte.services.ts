import { Injectable } from '@angular/core';
import { compte } from '../comptes/compte.model';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })


export class CompteService {
    private url = 'http://localhost:8080/microservice-test/comptes';
    constructor(private http: HttpClient) { }

    getComptes(): Observable<compte[]> {
        return this.http
        .get<compte[]>(this.url);
    }
}
