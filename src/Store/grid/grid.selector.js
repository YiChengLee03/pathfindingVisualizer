import { createSelector } from 'reselect';
import { START_NODE, END_NODE } from './grid.types';

const selectGridReducer = (state) => state.grid;

export const selectGrid = createSelector(
  [selectGridReducer],
  (grid) => grid.grid
);

export const selectStartNode = createSelector([selectGridReducer], (grid) => {
  const { row, col } = START_NODE;
  return grid.grid[row][col];
});

export const selectEndNode = createSelector([selectGridReducer], (grid) => {
  const { row, col } = END_NODE;
  return grid.grid[row][col];
});
