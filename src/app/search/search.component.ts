import { Component, Input, OnInit } from '@angular/core';
import { Property, properties } from '../models/properties';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
  private prop: Property[];

  public formInput: string = "";

  @Input() name: string = "";

  constructor() {
    this.prop = properties;
    this.formInput = this.name;
  }

  ngOnInit(): void {
  }
}
