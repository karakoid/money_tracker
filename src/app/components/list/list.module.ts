import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';

import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';


@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    PerfectScrollbarModule,
    HttpClientModule,
  ],
  exports: [
    ListComponent,
  ],
})
export class ListModule { }
