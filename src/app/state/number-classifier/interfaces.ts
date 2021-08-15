export interface NumberClassifierAction {
  canvasState: Uint8ClampedArray | number[];
  dateTime?: string;
}

export interface NumberClassifierState {
  savedActions: NumberClassifierAction[];
  undoneActions: NumberClassifierAction[];
}
