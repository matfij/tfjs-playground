import { AfterViewInit, Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad';

@Component({
  selector: 'app-signature-pad',
  templateUrl: './signature-pad.component.html',
  styleUrls: ['./signature-pad.component.scss']
})
export class SignaturePadComponent implements AfterViewInit {

  @Input() signaturePadOptions: Object = {
    'dotSize': 2,
    'maxWidth': 2,
    // 'minWidth': 5,
    'canvasWidth': 500,
    'canvasHeight': 300
  };
  @Output() imageData = new EventEmitter<any>();

  @ViewChild(SignaturePad) _signaturePad: SignaturePad;

  constructor() {}

  ngAfterViewInit() {
    this._signaturePad.set('minWidth', 5);
    this._signaturePad.clear();
  }

  public _drawComplete() {
    this.imageData.next(this._signaturePad.toDataURL());
  }

  public _clear() {
    this._signaturePad.clear();
  }

}
