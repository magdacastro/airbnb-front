import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Property } from '../models/properties';

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
}
