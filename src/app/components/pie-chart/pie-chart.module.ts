import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieChartComponent } from './pie-chart.component';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [PieChartComponent],
  imports: [
    CommonModule,
    ChartsModule,
  ],
  exports: [
    PieChartComponent,
  ]
})
export class PieChartModule { }
