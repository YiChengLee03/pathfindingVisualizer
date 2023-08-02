import { NODE_TYPES } from '../node/node.types';

export const GRID_ACTION_TYPES = {
  SET_GRID: 'grid/SET_GRID',
};

export const START_NODE = {
  row: 10,
  col: 10,
};

export const END_NODE = {
  row: 10,
  col: 40,
};

export const initGrid = () => {
  const grid = [];

  const createNode = (row, col) => {
    const nodeType =
      row === START_NODE.row && col === START_NODE.col
        ? NODE_TYPES.START
        : row === END_NODE.row && col === END_NODE.col
        ? NODE_TYPES.END
        : NODE_TYPES.NORMAL;

    return {
      row,
      col,
      nodeType,
      isVisited: false,
      previousNode: null,
      distance: Infinity,
      g_cost: 0,
      h_cost: 0,
      f_cost: 0,
    };
  };

  for (let row = 0; row < 22; row++) {
    const currRow = [];
    for (let col = 0; col < 56; col++) {
      currRow.push(createNode(row, col));
    }
    grid.push(currRow);
  }
  return grid;
};
