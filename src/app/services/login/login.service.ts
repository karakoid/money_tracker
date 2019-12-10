import { Injectable } from '@angular/core';
import {HttpService} from "../http/http.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  username: string;

  constructor(private http: HttpService) { }

  login(cred) {
    const url = `https://moneytrackerbe.herokuapp.com/api/users/login`;
    return this.http.auth(url, cred);
  }

  setToken(token: string) {
    this.http.token = token;
  }
}
