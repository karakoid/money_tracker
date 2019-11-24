import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

import { ListService } from '../../services/list/list.service';

import { DayTransactionsModel } from '../../models/transactions/day.transactions.model';
import { AccountsModel } from '../../models/accounts/accounts.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() type: string;
  data: Array<DayTransactionsModel | AccountsModel>;

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.listService.requestData(this.type).subscribe((data) => {
      this.data = data.data;
    });
  }

  getDate(date$: string): string {
    return moment(date$.substring(0, date$.indexOf('T'))).format('ll');
  }
}
