import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

import { PieChartService } from '../../services/pie-chart/pie-chart.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
    aspectRatio: 1,
    maintainAspectRatio: false,
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieCharColors = [{backgroundColor: ["#e84351", "#3ebf9b", "#4d86dc", "#f3af37", "#434a54"]}];

  constructor(private pieChartService: PieChartService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {
    this.pieChartService.requestData().subscribe((data: any) => {
      data.forEach((item) => {
        this.pieChartLabels.push([item.category_name]);
        this.pieChartData.push(item.expenses);
      });
    });
  }

}
