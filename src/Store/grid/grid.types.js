import { NODE_TYPES } from '../node/node.types';

export const GRID_ACTION_TYPES = {
  SET_GRID: 'grid/SET_GRID',
  TOGGLE_RESET_GRID: 'grid/TOGGLE_RESET_GRID',
};

const START_NODE_ROW = 10;
const START_NODE_COL = 10;
const END_NODE_ROW = 10;
const END_NODE_COL = 40;

export const initGrid = () => {
  const grid = [];

  const createNode = (row, col) => {
    const nodeType =
      row === START_NODE_ROW && col === START_NODE_COL
        ? NODE_TYPES.START
        : row === END_NODE_ROW && col === END_NODE_COL
        ? NODE_TYPES.END
        : NODE_TYPES.NORMAL;

    return {
      row,
      col,
      nodeType,
      distance: Infinity,
      isVisited: false,
      previousNode: null,
    };
  };

  for (let row = 0; row < 20; row++) {
    const currRow = [];
    for (let col = 0; col < 50; col++) {
      currRow.push(createNode(row, col));
    }
    grid.push(currRow);
  }
  return grid;
};
