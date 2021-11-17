import { Component, OnInit } from '@angular/core';
import { PropertiesService } from '../services/properties.service';
import { User } from '../models/users';
import { Month, Gender } from '../models/data';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public user: User;
  public sex: Gender[] = [
    {
      name: 'Feminino',
      value: 'F'
    },
    {
      name: 'Masculino',
      value: 'M'
    },
    {
      name: 'Não-binário',
      value: 'N'
    }
  ]
  public days: Array<number> = [];
  public years: Array<number> = [];
  public currentYear: number = new Date().getFullYear();
  public months: Month[] = [
    {
      name:'Janeiro',
      value: 1
    },
    {
      name:'Fevereiro',
      value: 2
    },
    {
      name:'Março',
      value: 3
    },
    {
      name:'Abril',
      value: 4
    },
    {
      name:'Maio',
      value: 5
    },
    {
      name:'Junho',
      value: 6
    },
    {
      name:'Julho',
      value: 7
    },
    {
      name:'Agosto',
      value: 8
    },
    {
      name:'Setembro',
      value: 9
    },
    {
      name:'Outubro',
      value: 10
    },
    {
      name:'Novembro',
      value: 11
    },
    {
      name:'Dezembro',
      value: 12
    }
  ];

  constructor(private prop: PropertiesService) {
    this.user = {
      id: 0,
      name: "",
      socialName: "",
      properties: [],
      gender: { name: "", value: "" },
      dtNasc: { day: 0, month: 0, year: 0 },
      email: "",
      password: ""
    }

    this.days = Array.from([...Array(31).keys()].map(x => ++x));
    this.years = Array.from([...Array(40).keys()].map(y => {
      return this.currentYear - y;
    }));

  }

  ngOnInit(): void {
  }

  storeProperty() {
    const request = {
      name: this.user.name,
      socialName: this.user.socialName,
      properties: [],
      gender: this.user.gender.value,
      dtNasc: `${this.user.dtNasc.day}/${this.user.dtNasc.month}/${this.user.dtNasc.year}`,
      email: this.user.email,
      password: this.user.password
    };
    
    this.prop.storeProperty(request).subscribe(data => {
      console.log(data);
    })
  }

}
