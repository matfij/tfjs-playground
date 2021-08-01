import { Component, OnInit } from '@angular/core';
import * as tf from '@tensorflow/tfjs';

@Component({
  selector: 'app-write-number',
  templateUrl: './write-number.component.html',
  styleUrls: ['./write-number.component.scss']
})
export class WriteNumberComponent implements OnInit {

  private _model: tf.LayersModel;
  public _prediction: any;

  ngOnInit(): void {
    this._loadModel().then((model: tf.LayersModel) => {
      this._model = model;
      console.log(model);
    });
  }

  private _loadModel(): Promise<tf.LayersModel> {
    return tf.loadLayersModel('/assets/models/number_classifier/model.json');
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
      console.log(this._prediction);
    });
  }

  listToMatrix(list, elementsPerSubArray) {
    var matrix = [], i, k;

    for (i = 0, k = -1; i < list.length; i++) {
        if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
        }

        matrix[k].push(list[i]);
    }

    return matrix;
}

}
