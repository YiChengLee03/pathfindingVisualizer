import { createElement } from 'react';
import { createSelector } from 'reselect';

const selectGridReducer = (state) => state.grid;

export const selectGrid = createSelector(
  [selectGridReducer],
  (grid) => grid.grid
);

export const selectToggleResetGrid = createSelector(
  [selectGridReducer],
  (grid) => grid.toggleResetGrid
);
