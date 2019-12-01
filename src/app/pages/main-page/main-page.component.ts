import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {TransactionModel} from "../../models/transactions/transaction.model";
import {AccountModel} from "../../models/accounts/account.model";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  @ViewChild('innerSliderContainer', {static: false}) innerSliderContainer: ElementRef;
  @ViewChild('slide', {static: false}) slide: ElementRef;

  transaction: TransactionModel;
  account: AccountModel;

  slideProps = {
    'transactions': {
      active: true,
      slideCount: 0,
    },
    'stats': {
      active: false,
      slideCount: 1,
    },
    'accounts': {
      active: false,
      slideCount: 2,
    },
  };

  constructor() { }

  ngOnInit() {}

  changeSliderView(slideProp): void {
    const slideWidth = Math.ceil(this.slide.nativeElement.offsetWidth);
    this.innerSliderContainer.nativeElement.style.left = `-${slideProp.slideCount * slideWidth}px`;

    this.changeActiveButton(slideProp);
  }

  private changeActiveButton(slideProp): void {
    Object.getOwnPropertyNames(this.slideProps).forEach((prop) => {
      this.slideProps[prop].active = false;
    });
    slideProp.active = true;
  }

  onTransactionOpen(item: TransactionModel) {
    this.transaction = item;
  }
}
