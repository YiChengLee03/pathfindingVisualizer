import { ALGO_ACTION_TYPES } from './algo.types';
import { createAction } from '../../utils/reducer.utils';

export const setAlgorithm = (algo) =>
  createAction(ALGO_ACTION_TYPES.SET_ALGORITHM, algo);

export const setIsAlgoDropdownOpen = (bool) =>
  createAction(ALGO_ACTION_TYPES.SET_IS_ALGO_DROPDOWN_OPEN, bool);
