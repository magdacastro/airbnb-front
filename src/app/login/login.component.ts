import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { User } from "../models/users";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginHostComponent implements OnInit {

  public user: User = {
    id: 0,
    name: "",
    properties: [],
    email: "",
    password: ""
  };

  constructor(private router: ActivatedRoute, private route: Router) {  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.user);

    // cria um serviço para verificar no banco de dados se o usuário existe

    // se existir, redireciona para a tela principal, senão retorna para a tela de login com uma mensagem de erro

    return false;

    this.route.navigateByUrl('/route-name');
    console.warn(this.route.navigateByUrl);
  }
}
