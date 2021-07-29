import { Component, OnInit } from '@angular/core';
import * as tf from '@tensorflow/tfjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tfjs-text-recognition';

  private _linearModel = tf.sequential();
  public _prediction: any;

  ngOnInit() {
    this.setupModel();
    this.trainModel().then((sth) => { console.log(sth); });
  }

  setupModel() {
    this._linearModel.add(
      tf.layers.dense({units: 1, inputShape: [1]})
    );
    this._linearModel.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
  }

  trainModel(): Promise<any> {
    const xs = tf.tensor1d([3.2, 4.4, 5.5, 3.3, 4.5, 5.4]);
    const ys = tf.tensor1d([1.6, 2.7, 3.5, 1.7, 2.8, 3.6]);

    return this._linearModel.fit(xs, ys);
  }

  makePrediction(val: number) {
    const output = this._linearModel.predict(tf.tensor2d([val], [1, 1]));
    this._prediction = Array.from((output as any).dataSync())[0];
  }
}
