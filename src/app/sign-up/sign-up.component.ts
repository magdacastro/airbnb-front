import { Component, OnInit } from '@angular/core';
import { PropertiesService } from '../services/properties.service';
import { User } from '../models/users';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public user: User;

  constructor(private prop: PropertiesService) {
    this.user = {
      id: 0,
      name: "",
      socialname: "",
      properties: [],
      sex: { type: "" },
      datebirth: { day: 0, month: 0, year: 0 },
      email: "",
      password: ""
    }
  }

  ngOnInit(): void {
  }

  storeProperty() {
    this.prop.storeUser(this.user);
  }
}
