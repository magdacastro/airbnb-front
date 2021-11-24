import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertiesService } from '../services/properties.service';
import { User } from '../models/users';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public user: User;

  constructor(private prop: PropertiesService, private route: Router) {
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
    const request = {
      name: this.user.name,
      socialName: this.user.socialname,
      properties: [],
      gender: this.user.sex,
      dtNasc: `${this.user.datebirth.day}/${this.user.datebirth.month}/${this.user.datebirth.year}`,
      email: this.user.email,
      password: this.user.password
    };

    this.prop.storeProperty(request).subscribe(data => {
      console.log(data);
      this.route.navigateByUrl('/');
    })
  }
}
