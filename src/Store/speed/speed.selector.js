import { createSelector } from 'reselect';

const selectSpeedReducer = (state) => state.speed;

export const selectSpeed = createSelector(
  [selectSpeedReducer],
  (speed) => speed.speed
);

export const selectIsDropdownOpen = createSelector(
  [selectSpeedReducer],
  (speed) => speed.isDropdownOpen
);
