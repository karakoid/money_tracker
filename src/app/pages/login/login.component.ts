import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import {LoginService} from "../../services/login/login.service";
import {HeaderService} from "../../services/header/header.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error: string | null;

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private router: Router,
              private loginService: LoginService,
              private headerService: HeaderService) { }

  ngOnInit() {
  }

  submit() {
    const login = this.form.value.username;
    const password = this.form.value.password;
    if (login.length && password.length) {
      this.error = null;
      this.loginService.login({login, password}).subscribe(
        (resp: any) => {
          const token = resp.headers.get('Authorization');

          localStorage.setItem('auth', token);
          this.loginService.setToken(token);

          localStorage.setItem('username', resp.body.login);
          this.loginService.username = resp.body.login;

          this.headerService.visible = true;
          this.headerService.username = resp.body.login;

          this.router.navigateByUrl('/main-page');
        },
        () => {
          this.error = 'Wrong credentials';
        }
      );
    } else {
      this.error = 'Wrong credentials';
    }
  }
}
