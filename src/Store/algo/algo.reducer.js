import { ALGO_ACTION_TYPES, ALGO_TYPES } from './algo.types';

const ALGO_INITIAL_STATE = {
  algorithm: ALGO_TYPES.DIJKSTRAS,
  isAlgoDropdownOpen: false,
};

export const algoReducer = (state = ALGO_INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ALGO_ACTION_TYPES.SET_ALGORITHM:
      return {
        ...state,
        algorithm: payload,
      };
    case ALGO_ACTION_TYPES.SET_IS_ALGO_DROPDOWN_OPEN:
      return {
        ...state,
        isAlgoDropdownOpen: payload,
      };
    default:
      return state;
  }
};
