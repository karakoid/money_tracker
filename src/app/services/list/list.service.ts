import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpService } from '../http/http.service';

import { RequestedTransactionsModel } from '../../models/transactions/requested.transactions.model';
import { RequestedAccountsModel } from '../../models/accounts/requested.accounts.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpService) { }

  requestData(type: string): Observable<RequestedTransactionsModel | RequestedAccountsModel> {
    return this.http.get(type);
  }
}
