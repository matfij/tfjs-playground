import {
  Actions,
  ADD_ACTION,
  REDO_ACTION,
  RESET,
  UNDO_ACTION,
} from 'src/app/definitions/consts/number-classifier.actions';
import { NumberClassifierState } from 'src/app/definitions/interfaces/number-classifier.state';

export type Action = Actions;

const initialState: NumberClassifierState = {
  savedActions: [],
  undoneActions: []
};

// state object is immutable so it has to be reassigned each time
const newState = (state, newData) => Object.assign({}, state, newData);

export function NumberClassifierReducer(
  state: NumberClassifierState = initialState,
  action: Action
) {
  console.log(action.type, state);

  switch (action.type) {
    case ADD_ACTION: {
      const actions = state.savedActions.push(action.actionData);
      return newState(state, { savedActions: actions });
    }
    case UNDO_ACTION: {
      const lastInd = state.savedActions.length - 1;
      const undoneAction = state.savedActions[lastInd];
      state.savedActions.splice(lastInd - 1);
      state.undoneActions.push(undoneAction);

      return state;
    }
    case REDO_ACTION: {
      const lastInd = state.undoneActions.length - 1;
      const redoneAction = state.undoneActions[lastInd];
      state.undoneActions.splice(lastInd - 1);
      state.savedActions.push(redoneAction);

      return state;
    }
    case RESET: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
