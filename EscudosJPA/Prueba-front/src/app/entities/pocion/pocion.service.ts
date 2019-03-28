import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pocion } from './pocion';

@Injectable({
  providedIn: 'root'
})
export class PocionService {

  url:String="http://localhost:8080/api/";
  constructor(private http: HttpClient) { }

  getPociones(): Observable<any>{
    return this.http.get<Pocion[]>(this.url+'pociones');
  }
  getPocionById(id: String): Observable<any>{
    return this.http.get<Pocion>(this.url+'pociones/pocion/'+id);
  }
  deletePocion(id: String){
    return this.http.delete(this.url+'pociones/delete/'+id);
  }
  createPocion(pocion: Pocion){
    console.log(Pocion);
    return this.http.post(this.url+'pociones/create', pocion);
  }
}
