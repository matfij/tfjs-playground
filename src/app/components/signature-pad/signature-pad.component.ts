import { AfterViewInit, Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { DrawableDirective } from 'src/app/utils/directives/drawable.directive';

@Component({
  selector: 'app-signature-pad',
  templateUrl: './signature-pad.component.html',
  styleUrls: ['./signature-pad.component.scss']
})
export class SignaturePadComponent {

  @ViewChild(DrawableDirective) _canvas: DrawableDirective;

  @Output() imageData = new EventEmitter<ImageData>();

  constructor() {}

  public _onImageChanged(imageData: ImageData) {
    this.imageData.next(imageData);
  }

  public _clear() {
    this._canvas.clear();
  }

}
