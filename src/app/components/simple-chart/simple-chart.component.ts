import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-simple-chart',
  templateUrl: './simple-chart.component.html',
  styleUrls: ['./simple-chart.component.scss']
})
export class SimpleChartComponent implements OnInit {

    @Input() chartOptions: ChartOptions = {
      responsive: true,
    };
    @Input() chartLabels: Label[] = [];
    @Input() chartData: SingleDataSet = [];
    @Input() chartType: ChartType = 'bar';
    @Input() chartLegend = false;
    @Input() chartPlugins = [];

  constructor() { }

  ngOnInit(): void {
  }

}
