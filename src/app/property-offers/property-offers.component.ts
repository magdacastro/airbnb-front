import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from 'src/app/models/properties';
import { PropertiesService } from '../services/properties.service';

@Component({
  selector: 'app-property-offers',
  templateUrl: './property-offers.component.html',
  styleUrls: ['./property-offers.component.scss']
})
export class PropertyOffersComponent implements OnInit {
  private properties: Property[] = [];

  constructor(private route: ActivatedRoute, private propertiesService: PropertiesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.propertiesService.list().subscribe((properties: Property[]) => {
        this.properties = properties.filter(n => n)!
      });
    });
  }

  getProperties(): Property[] {
    return this.properties;
  }
}
