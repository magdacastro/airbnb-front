import { Component, OnInit } from '@angular/core';
import { properties, Property } from '../models/properties';
import { PropertiesService } from '../services/properties.service';
@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {

  properties: Property[] = [];
  myproperties = properties;
  displayGrid = false;

  filters = {
    name: "",
  }

  constructor(private propertiesService: PropertiesService) { }

  ngOnInit(): void {
    this.propertiesService.list().subscribe(properties => this.properties = properties);
  }

  getProperties(){
    const list = this.myproperties.map((prop: any) => {
      const existsOnTitle = prop.name.toUpperCase().includes(this.filters.name.toUpperCase());
      const existsOnDescription = prop.description.toUpperCase().includes(this.filters.name.toUpperCase());

      if (existsOnTitle === true || existsOnDescription === true) {
        return prop;
      }
    }).filter(n => n);

    console.log(list);
    return list;
  }

  reserve() {
    window.alert('Seu local foi reservado!');
  }

  inputChange(event:any) {
    this.filters.name = event;
    this.filters.name.length > 0 ? this.displayGrid = true : this.displayGrid = false;
  }
}


