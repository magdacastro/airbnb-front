import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Property } from '../models/properties';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PropertiesService {
  items: Property[] = [];

  constructor(private http: HttpClient) { }

  addToCart(properties: Property) {
    this.items.push(properties);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  list(): Observable<Property[]> {
    return this.http.get<Property[]>('https://airbnb-back-properties.herokuapp.com/all');
    //return this.http.get<Property[]>('http://localhost:8080/all');
  }

  getHost(hostName:String){
    return this.http.get<Property>('https://airbnb-back-properties.herokuapp.com/'+hostName);
  }
}
