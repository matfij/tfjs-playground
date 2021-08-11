import * as tf from '@tensorflow/tfjs';
import { Component, OnInit } from '@angular/core';
import { Label, SingleDataSet } from 'ng2-charts';
import { TranslateService } from '@ngx-translate/core';

const CONFIG = {
  NUMBER_OF_CLASSES: 2,
  CLASS_LABELS: ['pages.writeReview.positive', 'pages.writeReview.negative'],
  DEFAULT_OUTPUT_VALUE: 1,
};

@Component({
  selector: 'app-write-review',
  templateUrl: './write-review.component.html',
  styleUrls: ['./write-review.component.scss'],
})
export class WriteReviewComponent implements OnInit {
  private _model: tf.LayersModel;
  public _prediction: any;
  public _chartLabels: Label[] = [];
  public _chartData: SingleDataSet = [];

  constructor(
    private _translateService: TranslateService
  ) {}

  ngOnInit(): void {
    // load model

    this._resetChartData();
  }

  public _resetChartData() {
    this._chartLabels = [];
    this._chartData = [];

    for (let i = 0; i < CONFIG.NUMBER_OF_CLASSES; i++) {
      const label = this._translateService.instant(CONFIG.CLASS_LABELS[i]);
      this._chartLabels.push(label);
      this._chartData.push(CONFIG.DEFAULT_OUTPUT_VALUE);
    }
  }
}
