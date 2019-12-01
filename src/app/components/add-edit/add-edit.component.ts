import {Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

import {TransactionModel} from '../../models/transactions/transaction.model';
import {AccountModel} from "../../models/accounts/account.model";

import * as moment from 'moment';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit, OnChanges {
  @Input() type: string;
  @Input() transaction: TransactionModel;
  @Input() account: AccountModel;

  @ViewChild('income', {static: false}) incomeContainer: ElementRef;
  @ViewChild('expenses', {static: false}) expensesContainer: ElementRef;

  add: boolean;

  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      category: new FormControl(''),
      account: new FormControl(''),
      income: new FormControl(''),
      expenses: new FormControl(''),
      comment: new FormControl(''),
    });

    this.formValueListener();
  }

  ngOnChanges() {
    if (this.transaction) {
      this.add = false;
      this.initForm();
    }
  }

  formValueListener() {
    this.form.valueChanges.subscribe((value) => {
      if (this.add) {
        if (value.income !== '') {
          this.incomeContainer.nativeElement.style.display = 'block';
          this.expensesContainer.nativeElement.style.display = 'none';
        } else if (value.expenses !== '') {
          this.incomeContainer.nativeElement.style.display = 'none';
          this.expensesContainer.nativeElement.style.display = 'block';
        } else {
          this.incomeContainer.nativeElement.style.display = 'block';
          this.expensesContainer.nativeElement.style.display = 'block';
        }
      }
    });
  }

  initForm() {
    this.form.controls.category.setValue(this.transaction.category);
    this.form.controls.account.setValue(this.transaction.account);
    this.form.controls.income.setValue(`${this.transaction.income}${this.transaction.currency}`);
    this.form.controls.expenses.setValue(`${this.transaction.expenses}${this.transaction.currency}`);
    this.form.controls.comment.setValue(this.transaction.comment);
  }

  resetForm() {
    this.transaction = null;
    this.form.controls.category.setValue('');
    this.form.controls.account.setValue('');
    this.form.controls.income.setValue('');
    this.form.controls.expenses.setValue('');
    this.form.controls.comment.setValue('');
  }

  openForm() {
    this.add = true;
  }

  closeForm() {
    this.add = false;
  }

  addTransaction() {
    this.resetForm();
  }

  editTransaction() {
    this.resetForm();
  }

  deleteTransaction() {
    this.resetForm();
  }

  getCurrentDate() {
    return moment(new Date()).format('ll');
  }

  getDate(date$?: string) {
    let value;
    if (date$) {
      value = date$.substring(0, date$.indexOf('T'));
    } else {
      value = new Date();
    }
    return moment(value).format('ll');
  }
}
