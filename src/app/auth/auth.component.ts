import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { CookieService } from '../services/cookie.service';
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

  constructor(private route: Router, private userService: UserService, private cookieService: CookieService) { }

  ngOnInit(): void { }

  onSubmit(): Boolean {
    if (this.auth.email.length === 0 || this.auth.password.length === 0) {
      return false;
    }

    this.userService.getUsers().subscribe((response: any) => {
      const user = response.find((user: User) => this.auth.email === user.email && this.auth.password === user.password);

      if (typeof user === typeof {}) {
        this.cookieService.setCookie("user.email", user.email, 5);
        this.cookieService.setCookie("user.name", user.name, 5);
        this.cookieService.setCookie("user.socialName", user.socialName, 5);

        /* Set an user cookie here... */
        this.route.navigateByUrl('/');
      }
    });

    return true;
  }
}
