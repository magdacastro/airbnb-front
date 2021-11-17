import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Auth } from '../models/auth';
import { User } from '../models/users';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public auth: Auth = {
    email: "",
    password: ""
  };

  constructor(private route: Router, private userService: UserService) { }

  ngOnInit(): void { }

  onSubmit(): Boolean {
    if (this.auth.email.length === 0 || this.auth.password.length === 0) {
      return false;
    }

    this.userService.getUsers().subscribe((response: any) => {
      const user = response.find((user: User) => this.auth.email === user.email && this.auth.password === user.password);

      if (typeof user === typeof {}) {
        /* Set an user cookie here... */
        this.route.navigateByUrl('/');
      }
    });

    return true;
  }
}
