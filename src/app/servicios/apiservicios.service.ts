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
  private matriculaTallerURL = 'http://localhost:8089/matriculas/taller/'

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  }

  constructor(private http: HttpClient) { }


  //talleres

  public getTaller(id: number): Observable<TalleresInterface> {
    return this.http.get<TalleresInterface>(this.talleresURL + id);
  }

  public getTalleres() {
    return this.http.get(this.talleresURL);
  }

  public postTaller(taller: TalleresInterface): Observable<TalleresInterface> {
    return this.http.post<TalleresInterface>(this.talleresURL, taller, this.httpOptions);
  }

  public deleteTaller(id: number): Observable<TalleresInterface> {
    return this.http.delete<TalleresInterface>(this.talleresURL + id);
  }

  public putTaller(id: number, taller: TalleresInterface): Observable<TalleresInterface> {
    return this.http.put<TalleresInterface>(this.talleresURL + id, taller, this.httpOptions);
  }


  //matriculas

  public getMatriculas(id: number): Observable<MatriculasInterface> {
    return this.http.get<MatriculasInterface>(this.matriculaTallerURL + id);
  }
  public getMatricula(id: number): Observable<MatriculasInterface> {
    return this.http.get<MatriculasInterface>(this.matriculasURL + id);
  }

  public deleteMatricula(id: number): Observable<MatriculasInterface> {
    return this.http.delete<MatriculasInterface>(this.matriculasURL + id);
  }

  public postMatricula(matricula: MatriculasInterface):
    Observable<MatriculasInterface> {
    return this.http.post<MatriculasInterface>(
      this.matriculasURL, matricula, this.httpOptions
    );
  }
}

