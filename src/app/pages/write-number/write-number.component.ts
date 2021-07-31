import { Component, OnInit } from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import { PixelData } from '@tensorflow/tfjs';

@Component({
  selector: 'app-write-number',
  templateUrl: './write-number.component.html',
  styleUrls: ['./write-number.component.scss']
})
export class WriteNumberComponent implements OnInit {

  private _model: tf.LayersModel;
  public _prediction: any;

  ngOnInit() {
    this._loadModel().then((model: tf.LayersModel) => {
      this._model = model;
      console.log(model);
    });
  }

  private _loadModel(): Promise<tf.LayersModel> {
    return tf.loadLayersModel('/assets/models/number_classifier/model.json');
  }

  public _predictNumber(numberImage: string) {
    return tf.tidy(() => {
      // conver base64 to PixelData
      let im = new HTMLImageElement()
      im.src = numberImage;

      // convert canvas data to tensor
      let img = tf.browser.fromPixels(im, 1);
      img = img.reshape([1, 28, 28, 1]);
      img = img.cast('float32');

      // feed the model
      const output = this._model.predict(img);
      this._prediction = Array.from((output as any).dataSync());
      console.log(this._prediction);
    });
  }


}
