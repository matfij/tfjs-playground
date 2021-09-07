import {
  Actions,
  ADD_ACTION,
  REDO_ACTION,
  RESET,
  UNDO_ACTION,
} from './actions';
import { NumberClassifierState } from './interfaces';

const initialState: NumberClassifierState = {
  savedActions: [],
  undoneActions: [],
};

const newStateFactory = (state, data) => {
  return Object.assign({}, state, data);
};

export function numberClassifierReducer(
  state: NumberClassifierState = initialState,
  action: Actions
) {
  switch (action.type) {
    case ADD_ACTION: {
      const actions = [...state.savedActions, action.actionData];

      return newStateFactory(state, { savedActions: actions });
    }
    case UNDO_ACTION: {
      if (state.savedActions.length > 0) {
        const lastInd = state.savedActions.length - 1;
        const undoneAction = state.savedActions[lastInd];

        const savedActions = state.savedActions.slice(0, lastInd);
        const undoneActions = [...state.undoneActions, undoneAction];

        return newStateFactory(state, { savedActions, undoneActions });
      } else {
        return state;
      }

    }
    case REDO_ACTION: {
      if (state.undoneActions.length > 0) {
        const lastInd = state.undoneActions.length - 1;
        const redoneAction = state.undoneActions[lastInd];

        const savedActions = [...state.savedActions, redoneAction];
        const undoneActions = state.undoneActions.slice(0, lastInd);

        return newStateFactory(state, { savedActions, undoneActions });
      } else {
        return state;
      }
    }
    case RESET: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
