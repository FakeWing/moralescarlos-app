import { Injectable } from '@angular/core';
import { TalleresInterface, TalleresClase } from '../modelos/talleres';
import { MatriculasInterface, MatriculasClase } from '../modelos/matriculas';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviciosService {

  private talleresURL = 'http://localhost:8089/talleres/';
  private matriculasURL = 'http://localhost:8089/matriculas/';

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  }

  constructor(private http: HttpClient) { }

  public getTaller(id:number): Observable<TalleresInterface>{
    return this.http.get<TalleresInterface>(this.talleresURL+id);
  }

  public getTalleres(){
    return this.http.get(this.talleresURL);
  }

}
