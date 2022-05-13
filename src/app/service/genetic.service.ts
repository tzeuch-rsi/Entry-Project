import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GeneticData } from '../interface/genetic-data';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeneticService {

  private dataUrl = "api/data";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json ' })
  }

  getData(): Observable<GeneticData[]> {
    return this.http.get<GeneticData[]>(this.dataUrl)
      .pipe(
        catchError(this.handleError<GeneticData[]>('getData', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T)
  {
    return (error: any): Observable<T> => {
      return of(result as T);
    }
  }

  constructor(private http: HttpClient) { }
}
