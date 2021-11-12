import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Host, hosts } from '../models/host';

@Component({
  selector: 'app-property-host-details',
  templateUrl: './property-host-details.component.html',
  styleUrls: ['./property-host-details.component.css']
})
export class PropertyHostDetailsComponent implements OnInit {

  host: Host | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const hostFromRoute = String(routeParams.get('hostId'));

    this.host = hosts.find(host => host.name === hostFromRoute);
  }

}
