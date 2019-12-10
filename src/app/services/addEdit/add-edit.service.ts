import { Injectable } from '@angular/core';
import {HttpService} from "../http/http.service";
import {TransactionModel} from "../../models/transactions/transaction.model";

@Injectable({
  providedIn: 'root'
})
export class AddEditService {

  loading: boolean;

  constructor(private http: HttpService) {}

  addTransaction(transaction) {
    const url = `https://moneytrackerbe.herokuapp.com/api/transactions`;
    return this.http.post(url, transaction);
  }

  addAccount(account) {
    const url = `https://moneytrackerbe.herokuapp.com/api/accounts`;
    return this.http.post(url, account);
  }

  editTransaction(transaction) {
    const url = `https://moneytrackerbe.herokuapp.com/api/transactions`;
    return this.http.put(url, transaction);
  }

  editAccount(account) {
    const url = `https://moneytrackerbe.herokuapp.com/api/accounts`;
    return this.http.put(url, account);
  }

  deleteTransaction(id: number) {
    const url = `https://moneytrackerbe.herokuapp.com/api/transactions/${id}`;
    return this.http.delete(url);
  }

  deleteAccount(id: number) {
    const url = `https://moneytrackerbe.herokuapp.com/api/accounts/${id}`;
    return this.http.delete(url);
  }

  getCategories() {
    const url = `https://moneytrackerbe.herokuapp.com/api/transactions/categories`;
    return this.http.get(url);
  }

  getAccounts() {
    const url = `https://moneytrackerbe.herokuapp.com/api/accounts`;
    return this.http.get(url);
  }
}
