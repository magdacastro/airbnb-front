import { Component, OnInit } from '@angular/core';
import { properties } from '../models/properties';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {
  myproperties = properties;

  filters = {
    name: "",
  }

  constructor() { }

  ngOnInit(): void {
  }

  getProperties(){
    return this.myproperties;
  }

  reserve() {
    window.alert('Seu local foi reservado!');
  }
}
