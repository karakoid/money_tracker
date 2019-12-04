import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpService } from '../http/http.service';

import { RequestedTransactionsModel } from '../../models/transactions/requested.transactions.model';
import { RequestedAccountsModel } from '../../models/accounts/requested.accounts.model';
import {AccountsModel} from "../../models/accounts/accounts.model";
import {DayTransactionsModel} from "../../models/transactions/day.transactions.model";
import {TransactionModel} from "../../models/transactions/transaction.model";

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
