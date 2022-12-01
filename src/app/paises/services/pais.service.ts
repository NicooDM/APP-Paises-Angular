import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap} from 'rxjs';
import { RESTCountrieResponse } from '../interface/pais.interface';


@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiURL: string = 'https://restcountries.com/v2';
  private filterURL:string = '?fields=name;capital;alpha2code;flag;population';

  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<RESTCountrieResponse[]> {
    const url: string = `${this.apiURL}/name/${termino}`;
    return this.http.get<RESTCountrieResponse[]>(url);
  }
  buscarCapital(termino : string):Observable<RESTCountrieResponse[]>{
    const url : string = `${this.apiURL}/capital/${termino}`;
    return this.http.get<RESTCountrieResponse[]>(url);

  }
  getPaisPorAlpha(id : string):Observable<RESTCountrieResponse>{
    const url : string = `${this.apiURL}/alpha/${id}`;
    return this.http.get<RESTCountrieResponse>(url);

  }
  buscarRegion(region:string):Observable<RESTCountrieResponse[]>{
   // const params = new HttpParams().set('fields','name;capital;alpha2code;flag;population') revisar params despues
    const url : string = `${this.apiURL}/region/${region}`;
    return this.http.get<RESTCountrieResponse[]>(url);
    


  }
}
