import { SPEED_ACTION_TYPES, ALGO_SPEED } from './speed.types';

export const SPEED_INITIAL_STATE = {
  speed: ALGO_SPEED.FAST,
  isSpeedDropdownOpen: false,
};

export const speedReducer = (state = SPEED_INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SPEED_ACTION_TYPES.SET_SPEED:
      return {
        ...state,
        speed: payload,
      };
    case SPEED_ACTION_TYPES.SET_IS_SPEED_DROPDOWN_OPEN:
      return {
        ...state,
        isSpeedDropdownOpen: payload,
      };
    default:
      return state;
  }
};
