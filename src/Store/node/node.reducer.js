import { NODE_ACTION_TYPES, NODE_TYPES } from './node.types';

const NODE_INITIAL_STATE = {
  nodeType: NODE_TYPES.WALL,
  isNodeDropdownOpen: false,
};

export const nodeReducer = (state = NODE_INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case NODE_ACTION_TYPES.SET_NODE_TYPE:
      return {
        ...state,
        nodeType: payload,
      };
    case NODE_ACTION_TYPES.SET_IS_NODE_DROPDOWN_OPEN:
      return {
        ...state,
        isNodeDropdownOpen: payload,
      };
    default:
      return state;
  }
};
