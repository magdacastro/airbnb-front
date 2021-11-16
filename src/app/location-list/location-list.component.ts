import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { properties, Property } from '../models/properties';
import { PropertiesService } from '../services/properties.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {
  private properties: Property[];

  displayGrid: Boolean = false;

  filters = {
    name: "",
  }

  constructor(private propertiesService: PropertiesService, private http: HttpClient) {
    this.propertiesService.list().subscribe(properties => this.properties = properties);
    this.properties = [];
  }

  ngOnInit(): void { }

  getProperties(): Property[] {
    return this.properties.map((prop: any) => {
      const existsOnName = prop.name.toUpperCase().includes(this.filters.name.toUpperCase());
      const existsOnDescription = prop.description.toUpperCase().includes(this.filters.name.toUpperCase());

      if (existsOnName === true || existsOnDescription === true) {
        return prop;
      }
    }).filter(n => n);
  }

  reserve(): void {
    window.alert('Seu local foi reservado!');
  }

  inputChange(event: any): void {
    this.filters.name = event;

    this.displayGrid = this.filters.name.length > 0 ? true : false;
  }
}
