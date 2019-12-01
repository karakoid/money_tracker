import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';

import { ListService } from '../../services/list/list.service';

import { DayTransactionsModel } from '../../models/transactions/day.transactions.model';
import { AccountsModel } from '../../models/accounts/accounts.model';
import {TransactionModel} from "../../models/transactions/transaction.model";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() type: string;
  @Output() transactionOpen: EventEmitter<any> = new EventEmitter();
  data;

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.listService.requestData(this.type).subscribe((data) => {
      this.data = data;
    });
  }

  getTotal(type: string, item: DayTransactionsModel): number {
    let total = 0;
    item.data.forEach((trans) => {
      total += +trans[type];
    });
    return total;
  }

  getDate(date$: string): string {
    return moment(date$.substring(0, date$.indexOf('T'))).format('ll');
  }

  openTransaction($event) {
    const target = $event.target;
    const targetParent = target.parentElement;
    if (target.classList.contains('list-item') || targetParent.classList.contains('list-item')) {
      this.listService.requestTransaction(target.id | targetParent.id).subscribe((trans) => {
        this.transactionOpen.emit(trans);
      });
    }
  }
}
