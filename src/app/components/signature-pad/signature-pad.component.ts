import { Component, Output, ViewChild, EventEmitter, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ExtendedImageData } from 'src/app/definitions/interfaces/extended-image-data';
import { AddAction, RedoAction, UndoAction } from 'src/app/state/number-classifier/actions';
import { NumberClassifierAction, NumberClassifierState } from 'src/app/state/number-classifier/interfaces';
import { DrawableDirective } from 'src/app/utils/directives/drawable.directive';

interface PadState {
  state: NumberClassifierState;
}

@Component({
  selector: 'app-signature-pad',
  templateUrl: './signature-pad.component.html',
  styleUrls: ['./signature-pad.component.scss'],
})
export class SignaturePadComponent implements AfterViewInit {
  @Output() imageData = new EventEmitter<ImageData>();
  @Output() imageCleared = new EventEmitter<boolean>();

  @ViewChild(DrawableDirective) _canvas: DrawableDirective;

  savedState: Observable<NumberClassifierState>;

  constructor(
    private _store: Store<{state: NumberClassifierState}>
  ) {}

  ngAfterViewInit() {
    this._canvas.setImageData((new Array(180000)).fill(1) as number[]);
    this._onImageChanged(this._canvas.getImgData());
  }

  public _onImageChanged(imageData: ExtendedImageData) {
    this.imageData.next(imageData.smallImageData);

    const data: NumberClassifierAction = {
      canvasState: [...imageData.fullImageData.data]
    }
    this._store.dispatch(new AddAction(data));
  }

  public _clear() {
    this._canvas.clear();

    this.imageCleared.next(true);

    const data: NumberClassifierAction = {
      canvasState: [...(this._canvas.getImgData().fullImageData.data)]
    }
    this._store.dispatch(new AddAction(data));
  }

  public _redo() {
    this._store.dispatch(new RedoAction());

    this._store.select('state').subscribe((state: NumberClassifierState) => {
      if (state.undoneActions.length > 0 && state.savedActions.length > 0) {
        this._canvas.setImageData(state.savedActions[state.savedActions.length - 1].canvasState as number[]);
        this.imageData.next(this._canvas.getImgData().smallImageData);
      }
    });
  }

  public _undo() {
    this._store.dispatch(new UndoAction());

    this._store.select('state').subscribe((state: NumberClassifierState) => {
      if (state.savedActions.length > 0) {
        this._canvas.setImageData(state.savedActions[state.savedActions.length - 1].canvasState as number[]);
        this.imageData.next(this._canvas.getImgData().smallImageData);
      }
    });
  }
}
