import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

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

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submit() {
    if (this.form.value.username === 'admin' && this.form.value.password === 'admin') {
      this.error = null;
      this.router.navigateByUrl('/main-page');
    } else {
      this.error = 'Wrong credentials';
    }
  }
}
