import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RequestedTransactionsModel } from '../../models/transactions/requested.transactions.model';
import { RequestedAccountsModel } from '../../models/accounts/requested.accounts.model';

import { LIST_CONFIG } from '../../components/list/list.config';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  get(type: string): Observable<RequestedTransactionsModel | RequestedAccountsModel> {
    return new Observable<RequestedTransactionsModel>(subscriber => {
      subscriber.next(LIST_CONFIG[type].data);
    });
  }
}
