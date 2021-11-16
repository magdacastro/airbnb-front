import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Host, hosts } from '../models/host';
import { PropertiesService } from '../services/properties.service';

@Component({
  selector: 'app-property-host-details',
  templateUrl: './property-host-details.component.html',
  styleUrls: ['./property-host-details.component.css']
})
export class PropertyHostDetailsComponent implements OnInit {

  host: Host | undefined;
  hostName : string | undefined;
  hostForm = this.formBuilder.group({
    name: '',
  })

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private propertiesService: PropertiesService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const hostFromRoute = String(routeParams.get('hostName'));

    //this.host = hosts.find(host => host.name === hostFromRoute);
    this.propertiesService.getHost(hostFromRoute);
    console.warn(hostFromRoute);
  }

  onSubmit(): void {
    console.warn('Your order has been submitted', this.hostForm.value);
  }

}
