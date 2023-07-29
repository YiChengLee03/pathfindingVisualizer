import { combineReducers } from 'redux';
import { gridReducer } from './grid/grid.reducer';
import { algoReducer } from './algo/algo.reducer';
import { speedReducer } from './speed/speed.reducer';
import { nodeReducer } from './node/node.reducer';

export const rootReducer = combineReducers({
  grid: gridReducer,
  algorithm: algoReducer,
  speed: speedReducer,
  node: nodeReducer,
});
