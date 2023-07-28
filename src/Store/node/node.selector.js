import { createSelector } from 'reselect';

const selectNodeReducer = (state) => state.node;

export const selectNodeType = createSelector(
  [selectNodeReducer],
  (node) => node.nodeType
);

export const selectIsNodeDropdownOpen = createSelector(
  [selectNodeReducer],
  (node) => node.isNodeDropdownOpen
);
