import { Component, Output, ViewChild, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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
export class SignaturePadComponent {
  @Output() imageData = new EventEmitter<ImageData>();
  @Output() imageCleared = new EventEmitter<boolean>();

  @ViewChild(DrawableDirective) _canvas: DrawableDirective;

  savedState: Observable<NumberClassifierState>;

  constructor(
    private _store: Store<{state: NumberClassifierState}>
  ) {}

  public _onImageChanged(imageData: ImageData) {
    this.imageData.next(imageData);

    const data: NumberClassifierAction = {
      canvasState: [...imageData.data]
    }
    this._store.dispatch(new AddAction(data));
  }

  public _clear() {
    this._canvas.clear();

    this.imageCleared.next(true);

    const data: NumberClassifierAction = {
      canvasState: [...(this._canvas.getImgData().data)]
    }
    this._store.dispatch(new AddAction(data));
  }

  public _redo() {
    this._store.dispatch(new RedoAction());

    this._store.select('state').subscribe((state: NumberClassifierState) => {
      this._canvas.setImageData(state.savedActions[state.savedActions.length - 1].canvasState as number[]);
    });
  }

  public _undo() {
    this._store.dispatch(new UndoAction());

    this._store.select('state').subscribe((state: NumberClassifierState) => {
      this._canvas.setImageData(state.savedActions[state.savedActions.length - 1].canvasState as number[]);
    });
  }
}
