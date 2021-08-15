import { Action } from '@ngrx/store';
import { NumberClassifierAction } from './interfaces';

export const ADD_ACTION = '[NumberClassifier] add action';
export const UNDO_ACTION = '[NumberClassifier] undo action';
export const REDO_ACTION = '[NumberClassifier] redo action';
export const RESET = '[NumberClassifier] reset actions';

export class AddAction implements Action {
  readonly type: string = ADD_ACTION;

  constructor(public actionData: NumberClassifierAction) {}
}

export class UndoAction implements Action {
  readonly type: string = UNDO_ACTION;

  constructor(public actionData?: NumberClassifierAction) {}
}

export class RedoAction implements Action {
  readonly type: string = REDO_ACTION;

  constructor(public actionData?: NumberClassifierAction) {}
}

export class Reset implements Action {
  readonly type: string = RESET;

  constructor(public actionData?: NumberClassifierAction) {}
}

export type Actions = AddAction | UndoAction | RedoAction | Reset;
