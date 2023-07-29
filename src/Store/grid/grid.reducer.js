import { GRID_ACTION_TYPES, initGrid } from './grid.types';

const GRID_INITIAL_STATE = {
  grid: initGrid(),
  toggleResetGrid: false,
};

export const gridReducer = (state = GRID_INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case GRID_ACTION_TYPES.SET_GRID:
      return {
        ...state,
        grid: payload,
      };
    case GRID_ACTION_TYPES.TOGGLE_RESET_GRID:
      return {
        // ...state,
        grid: initGrid(),
        toggleResetGrid: payload,
      };
    default:
      return state;
  }
};
