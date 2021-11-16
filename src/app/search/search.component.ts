import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Property } from '../models/properties';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
  public quantidade:number = 0;
  public formInput: string = "";

  @Input() name: string = "";
  @Output() searchChange = new EventEmitter<String>();

  constructor() {
    this.formInput = this.name;
  }

  ngOnInit(): void {
  }

  add(event:any){
    this.quantidade++;
  }

  remove(event:any){
    if(this.quantidade > 0) {
      this.quantidade--;
    }
  }

  inputChange(event:any) {
    this.searchChange.emit(event);
  }
}
