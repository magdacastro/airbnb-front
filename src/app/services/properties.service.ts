import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Property } from '../models/properties';
import { User } from '../models/users';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PropertiesService {
  [x: string]: any;
  items: Property[] = [];

  constructor(private http: HttpClient) { }

  addToCart(properties: Property) {
    this.items.push(properties);
  }

  list(): Observable<Property[]> {
    return this.http.get<Property[]>('https://airbnb-back-properties.herokuapp.com/all');
  }

  getHost(hostName: String) {
    return this.http.get<Property>('https://airbnb-back-properties.herokuapp.com/' + hostName);
  }

  storeProperty(user: any): Observable < User > {
      return this.http.post<User>('https://airbnb-back-properties.herokuapp.com/allUsers', user);
  }
}
