import { createSelector } from 'reselect';

const selectSpeedReducer = (state) => state.speed;

export const selectSpeed = createSelector(
  [selectSpeedReducer],
  (speed) => speed.speed
);

export const selectIsSpeedDropdownOpen = createSelector(
  [selectSpeedReducer],
  (speed) => speed.isSpeedDropdownOpen
);
