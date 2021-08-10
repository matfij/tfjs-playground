import { Component, OnInit } from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import { Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-write-number',
  templateUrl: './write-number.component.html',
  styleUrls: ['./write-number.component.scss']
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

    for (let i = 0; i < 10; i++) {
      this._chartLabels.push(`Number ${i}`);
      this._chartData.push(1);
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
