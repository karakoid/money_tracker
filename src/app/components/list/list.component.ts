import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import * as moment from 'moment';

import { ListService } from '../../services/list/list.service';

import { DayTransactionsModel } from '../../models/transactions/day.transactions.model';
import { AddEditService } from "../../services/addEdit/add-edit.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges {
  @Input() type: string;
  @Input() reload: number;

  @Output() transactionOpen: EventEmitter<any> = new EventEmitter();

  data;
  loaded: boolean;

  constructor(private listService: ListService,
              private addEditService: AddEditService) { }

  ngOnInit() {
    this.listService.requestData(this.type).subscribe((data) => {
      this.data = data;
      this.loaded = true;
    });
  }

  ngOnChanges() {
    this.loaded = false;
    this.ngOnInit();
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
      this.addEditService.loading = true;
      this.listService.requestTransaction(target.id | targetParent.id).subscribe((trans) => {
        this.addEditService.loading = false;
        this.transactionOpen.emit(trans);
      });
    }
  }
}
