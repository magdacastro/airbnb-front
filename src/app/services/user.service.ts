import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Property } from '../models/properties';
import { User } from '../models/users';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  [x: string]: any;
  items: Property[] = [];

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User> {
    return this.http.get<User>('https://airbnb-back-properties.herokuapp.com/allUsers');
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`https://airbnb-back-properties.herokuapp.com/allUsers/${id}`);
  }
}
