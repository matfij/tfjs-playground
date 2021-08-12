export interface NumberClassifierAction {
  canvasState: ImageData;
  dateTime?: string;
}

export interface NumberClassifierState {
  savedActions: NumberClassifierAction[];
  undoneActions: NumberClassifierAction[];
}
