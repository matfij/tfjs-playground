import * as tf from '@tensorflow/tfjs';
import { Component, OnInit } from '@angular/core';
import { Label, SingleDataSet } from 'ng2-charts';

const CONFIG = {
  NUMBER_OF_CLASSES: 10,
  CLASS_LABELS: [
    'Number 0',
    'Number 1',
    'Number 2',
    'Number 3',
    'Number 4',
    'Number 5',
    'Number 6',
    'Number 7',
    'Number 8',
    'Number 9',
  ],
  DEFAULT_OUTPUT_VALUE: 1,
};

@Component({
  selector: 'app-write-number',
  templateUrl: './write-number.component.html',
  styleUrls: ['./write-number.component.scss'],
})
export class WriteNumberComponent implements OnInit {
  private _model: tf.LayersModel;
  public _prediction: any;
  public _chartLabels: Label[] = [];
  public _chartData: SingleDataSet = [];

  ngOnInit(): void {
    this._loadModel().then((model: tf.LayersModel) => {
      this._model = model;
    });

    this._resetChartData();
  }

  private _loadModel(): Promise<tf.LayersModel> {
    return tf.loadLayersModel('/assets/models/number_classifier/model.json');
  }

  public _resetChartData() {
    this._chartLabels = [];
    this._chartData = [];

    for (let i = 0; i < CONFIG.NUMBER_OF_CLASSES; i++) {
      this._chartLabels.push(CONFIG.CLASS_LABELS[i]);
      this._chartData.push(CONFIG.DEFAULT_OUTPUT_VALUE);
    }
  }

  private _setChartData(data: SingleDataSet) {
    if (data.length === 10) {
      this._chartData = data;
    }
  }

  public _predictNumber(numberImage: ImageData) {
    return tf.tidy(() => {
      // conver canvas data to tenor
      let img = tf.browser.fromPixels(numberImage, 1);
      img = img.reshape([1, 28, 28, 1]);
      img = tf.cast(img, 'float32');

      // feed the model
      const output = this._model.predict(img);
      this._prediction = Array.from((output as any).dataSync());

      this._setChartData(this._prediction);
    });
  }
}
