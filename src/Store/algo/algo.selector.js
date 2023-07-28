import { createSelector } from 'reselect';

const selectAlgoReducer = (state) => state.algorithm;

export const selectAlgorithm = createSelector(
  [selectAlgoReducer],
  (algo) => algo.algorithm
);

export const selectIsAlgoDropdownOpen = createSelector(
  [selectAlgoReducer],
  (algo) => algo.isAlgoDropdownOpen
);
