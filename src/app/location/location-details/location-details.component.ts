import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from 'src/app/models/properties';
import { PropertiesService } from '../../services/properties.service';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss']
})
export class LocationDetailsComponent implements OnInit {
  private property: Property;

  constructor(private route: ActivatedRoute, private propertiesService: PropertiesService) {
    this.property = {
      id: 0,
      name: "",
      description: "",
      location: "",
      price: 0
    };

    this.route.params.subscribe(params => {
      this.propertiesService.list().subscribe(properties => {
        this.property = properties.find(property => property.id === parseInt(params['id']))!
      });
    });
  }

  ngOnInit(): void { }

  getProperty(): Property {
    return this.property;
  }
}
