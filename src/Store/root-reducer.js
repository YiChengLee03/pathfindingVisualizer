import { combineReducers } from 'redux';
import { algoReducer } from './algo/algo.reducer';
import { speedReducer } from './speed/speed.reducer';
import { nodeReducer } from './node/node.reducer';

export const rootReducer = combineReducers({
  algorithm: algoReducer,
  speed: speedReducer,
  node: nodeReducer,
});
