import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RequestedTransactionsModel } from '../../models/transactions/requested.transactions.model';
import { RequestedAccountsModel } from '../../models/accounts/requested.accounts.model';

import {HttpClient} from "@angular/common/http";

import { LIST_CONFIG } from '../../components/list/list.config';
import {DayTransactionsModel} from "../../models/transactions/day.transactions.model";
import {AccountsModel} from "../../models/accounts/accounts.model";
import {TransactionModel} from "../../models/transactions/transaction.model";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(url);
  }

  put(url: string, body) {
    return this.http.put(url, body);
  }

  post(url: string, body) {
    return this.http.post(url, body);
  }

  delete(url: string) {
    return this.http.delete(url);
  }
}
