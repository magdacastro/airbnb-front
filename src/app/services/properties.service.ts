import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Property } from '../models/properties';
import { User } from '../models/users';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root'
})

export class PropertiesService {

  private propertyUrl = 'https://airbnb-back-properties.herokuapp.com/all';

  items: Property[] = [];

  constructor(private http: HttpClient, private messageService: MessageService) { }

  addToCart(properties: Property) {
    this.items.push(properties);
  }

  list(): Observable<Property[]> {
    return this.http.get<Property[]>('https://airbnb-back-properties.herokuapp.com/all');
  }

  getHost(hostName: String) {
    return this.http.get<Property>('https://airbnb-back-properties.herokuapp.com/' + hostName);
  }

  storeProperty(user: any): Observable<User> {
    return this.http.post<User>('https://airbnb-back-properties.herokuapp.com/allUsers', user);
    console.log(user);
  }

  /** POST: add a new property to the server */
  addProperty(property: Property): Observable<Property> {
    return this.http.post<Property>(this.propertyUrl, property, this.httpOptions).pipe(
      tap((newProperty: Property) => this.log(`added property w/ id=${newProperty.id}`)),
      catchError(this.handleError<Property>('addProperty'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteProperty(id: number): Observable<Property> {
    const url = `${this.propertyUrl}/${id}`;

    return this.http.delete<Property>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted property id=${id}`)),
      catchError(this.handleError<Property>('deleteProperty'))
    );
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`PropertyService: ${message}`);
  }

   /** POST: add a new property to the server */
   addProperty(property: Property): Observable<Property> {
    return this.http.post<Property>(this.propertyUrl, property, this.httpOptions).pipe(
      tap((newProperty: Property) => this.log(`added property w/ id=${newProperty.id}`)),
      catchError(this.handleError<Property>('addProperty'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteProperty(id: number): Observable<Property> {
    const url = `${this.propertyUrl}/${id}`;

    return this.http.delete<Property>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted property id=${id}`)),
      catchError(this.handleError<Property>('deleteProperty'))
    );
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`PropertyService: ${message}`);
  }
}
