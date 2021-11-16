import { Component, OnInit } from '@angular/core';
import { HostRecommendation, hostRecommendations } from '../models/host-recommendations';

@Component({
  selector: 'app-host-page',
  templateUrl: './host-page.component.html',
  styleUrls: ['./host-page.component.scss']
})


export class HostPageComponent implements OnInit {

  //hostRec = hostRecommendations;
  public hostRec : HostRecommendation[];

  constructor() {
    this.hostRec = hostRecommendations;
   }

  ngOnInit(): void {
  }

  getRecommendations(){
    return this.hostRec;
  }

}
