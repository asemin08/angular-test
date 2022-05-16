import { Injectable } from '@angular/core';
import { compte } from '../comptes/compte.model';
import { Compte } from '../add-compte-template/Compte.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    }),
  };

@Injectable({
    providedIn: 'root'
  })


export class CompteService {
    private url = 'http://localhost:808eze0/microservice-test/';
    constructor(private http: HttpClient) { }

    getComptes(): Observable<compte[]> {
        return this.http
        .get<compte[]>(`${this.url}/comptes`);
    }

    addComptes(compte: Compte){
        console.log(compte); 
        return this.http.post<Compte>(`${this.url}/comptes`, compte, httpOptions);
    }
}
