import { GRID_ACTION_TYPES } from './grid.types';
import { createAction } from '../../utils/reducer.utils';

export const setGrid = (grid) => createAction(GRID_ACTION_TYPES.SET_GRID, grid);

export const resetGrid = (bool) =>
  createAction(GRID_ACTION_TYPES.TOGGLE_RESET_GRID, bool);
