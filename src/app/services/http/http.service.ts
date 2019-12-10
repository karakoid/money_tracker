import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  token: string;

  constructor(private http: HttpClient) { }

  auth(url: string, body) {
    return this.http.post(url, body, {observe: 'response'});
  }

  get(url: string) {
    const options = this.getOptions();
    return this.http.get(url, options);
  }

  put(url: string, body) {
    const options = this.getOptions();
    return this.http.put(url, body, options);
  }

  post(url: string, body) {
    const options = this.getOptions();
    return this.http.post(url, body, options);
  }

  delete(url: string) {
    const options = this.getOptions();
    return this.http.delete(url, options);
  }

  private getOptions() {
    let options;
    if (this.token) {
      options = {
        headers: {
          Authorization: this.token,
        }
      }
    } else {
      const storageToken = localStorage.getItem('auth');
      if (storageToken) {
        options = {
          headers: {
            Authorization: storageToken,
          }
        }
      } else {
        options = {};
      }
    }

    return options;
  }
}
