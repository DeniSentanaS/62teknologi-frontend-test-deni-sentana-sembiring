import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, Observable, retry, throwError} from "rxjs";
import { environment } from 'src/environments/environment';
import { Businesses } from '../_models/businesses.model';

@Injectable({
  providedIn: 'root'
})
export class BusinessesService {
  apiUrl: string = environment.apiUrl;
  businesses: string = '/api/v1/businesses';


  constructor(
    private http: HttpClient
  ) { }

  public getBusinesses(): Observable<any>{
    return this.http.get<any>(this.apiUrl + this.businesses)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      )
  }

  public create(objectData: any): Observable<Businesses> {
    return this.http.post<Businesses>(this.apiUrl + this.businesses + 'create/', JSON.stringify(objectData))
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      )
  }

  public update(id: any, objectData: any): Observable<Businesses> {
    return this.http.put<Businesses>(this.apiUrl + this.businesses + 'update/' + id, JSON.stringify(objectData))
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      )
  }

  public delete(id: any): Observable<Businesses> {
    return this.http.delete<Businesses>(this.apiUrl + this.businesses + 'destroy/' + id)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      )
  }

  errorHandler(error: any) {
    let errorMessage = ''
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.message
    } else {
      errorMessage = error.message
    }
    window.alert(errorMessage)
    return throwError(errorMessage)
  }
}

