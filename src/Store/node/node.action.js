import { NODE_ACTION_TYPES } from './node.types';
import { createAction } from '../../utils/reducer.utils';

export const setNodeType = (nodeType) =>
  createAction(NODE_ACTION_TYPES.SET_NODE_TYPE, nodeType);

export const setIsNodeDropdownOpen = (bool) =>
  createAction(NODE_ACTION_TYPES.SET_IS_NODE_DROPDOWN_OPEN, bool);
