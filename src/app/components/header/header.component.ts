import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login/login.service";
import {Router} from "@angular/router";
import {HeaderService} from "../../services/header/header.service";
import {HttpService} from "../../services/http/http.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService: HeaderService,
              private http: HttpService,
              private router: Router) { }

  ngOnInit() {
  }

  getUsername() {
    const storageUsername = localStorage.getItem('username');
    return storageUsername ? storageUsername : this.headerService.username;
  }

  onExitButtonClick() {
    localStorage.removeItem('auth');
    localStorage.removeItem('username');
    localStorage.removeItem('token');

    this.router.navigateByUrl('/login');

    this.http.token = null;
    this.headerService.visible = false;
  }
}
