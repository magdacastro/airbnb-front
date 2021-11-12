import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-property-host',
  templateUrl: './property-host.component.html',
  styleUrls: ['./property-host.component.css']
})
export class PropertyHostComponent implements OnInit {
  
  name: string | undefined

  constructor(private router: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.route.navigateByUrl('host/${this.name}');
    console.warn(this.route.navigateByUrl);
  }
}
