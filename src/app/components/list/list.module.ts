import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';

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
  ],
  exports: [
    ListComponent,
  ],
})
export class ListModule { }
