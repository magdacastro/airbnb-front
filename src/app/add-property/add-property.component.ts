import { Component, OnInit } from '@angular/core';
import { Property } from '../models/properties';
import { PropertiesService } from '../services/properties.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {

  properties: Property[] = [];

  constructor(private propertiesService: PropertiesService) { }

  ngOnInit(): void {
  }

  add(name: string, description: string, host: string, localization: string): void {
    name = name.trim();
    description = description.trim();
    host = host.trim();
    localization = localization.trim();
    if (!name) { return; }
    this.propertiesService.addProperty({ name, description } as Property)
      .subscribe((property:Property) => {
        this.properties.push(property);
      });
  }

  delete(property: Property): void {
    this.properties = this.properties.filter(p => p !== property);
    this.propertiesService.deleteProperty(property.id).subscribe();
  }

}
