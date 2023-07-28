import { SPEED_ACTION_TYPES } from './speed.types';
import { createAction } from '../../utils/reducer.utils';

export const setSpeed = (speed) => {
  createAction(SPEED_ACTION_TYPES.SET_SPEED, speed);
};

export const setIsDropdownOpen = (bool) => {
  createAction(SPEED_ACTION_TYPES.SET_IS_DROPDOWN_OPEN, bool);
};
