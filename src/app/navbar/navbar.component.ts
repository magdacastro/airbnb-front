import { Component, OnInit } from '@angular/core';
import { CookieService } from '../services/cookie.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public name: string = "";

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    this.name = this.cookieService.getCookie("user.socialName");
  }
}
