import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

import { AddEditService } from "../../services/addEdit/add-edit.service";

import { TransactionModel } from '../../models/transactions/transaction.model';
import { AccountModel } from "../../models/accounts/account.model";

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

  @Output() transactionsChanged: EventEmitter<any> = new EventEmitter();

  @ViewChild('income', {static: false}) incomeContainer: ElementRef;
  @ViewChild('expenses', {static: false}) expensesContainer: ElementRef;

  add: boolean;

  form: FormGroup;

  constructor(private addEditService: AddEditService) { }

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
    this.resetForm();
  }

  private getForm() {
    const income = parseInt(this.form.controls.income.value, 10);
    const expenses = parseInt(this.form.controls.expenses.value, 10);
    return {
      date: this.transaction.date,
      category: this.form.controls.category.value,
      account: this.form.controls.account.value,
      expenses: expenses ? expenses : '0',
      income: income ? income : '0',
      currency: 'USD',
      comment: this.form.controls.comment.value,
    };
  }

  addTransaction() {
    if (this.validateForm()) {
      this.addEditService.addTransaction(this.getForm()).subscribe((res) => {
        this.transactionsChanged.emit();
        this.resetForm();
      });
    }
  }

  editTransaction() {
    if (this.validateForm()) {
      const body = {...this.getForm(), id: this.transaction.id};
      this.addEditService.editTransaction(body).subscribe((val) => {
        this.transactionsChanged.emit();
        this.resetForm();
      });
    }
  }

  deleteTransaction() {
    this.addEditService.deleteTransaction(this.transaction.id).subscribe(() => {
      this.transactionsChanged.emit();
      this.resetForm();
    });
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

  validateForm(): boolean {
    const category = this.form.controls.category.value;
    const account = this.form.controls.account.value;
    const expenses = parseInt(this.form.controls.expenses.value, 10);
    const income = parseInt(this.form.controls.income.value, 10);
    return category && category.length > 0 && category.length < 50 &&
      account && account.length > 0 && account.length < 50 &&
      (expenses > 0 || income > 0);
  }
}
