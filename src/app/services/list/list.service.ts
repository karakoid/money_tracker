import { Injectable } from '@angular/core';

import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpService) { }

  requestData(type: string) {
    let url = '';
    if (type === 'trans') {
      url = 'https://moneytrackerbe.herokuapp.com/api/transactions';
    } else if (type === 'accounts') {
      url = 'https://moneytrackerbe.herokuapp.com/api/accounts';
    }
    return this.http.get(url);
  }

  requestTransaction(id: number) {
    const url = `https://moneytrackerbe.herokuapp.com/api/transactions/${id}`;
    return this.http.get(url);
  }

  requestAccount(id: number) {
    const url = `https://moneytrackerbe.herokuapp.com/api/accounts/${id}`;
    return this.http.get(url);
  }
}
