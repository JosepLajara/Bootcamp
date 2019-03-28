import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pocion } from './pocion.model';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PocionService {

  url: String = 'http://localhost:8080/api/'

  constructor(public http: HttpClient) { }

  getPociones(): Observable<any> {
    return this.http.get<Pocion[]>(this.url + 'pociones');
  }

  getPocionById(id: String): Observable<any> {
    return this.http.get<Pocion>(this.url + 'pocion/' + id);
  }

  insertarPocion(pocion: Pocion): Observable<any> {
    return this.http.post<Pocion>(this.url+'pocion', pocion);
  }

  deletePocion(id: String){
    this.http.delete(this.url + 'pocion/' + id);
  }
}
