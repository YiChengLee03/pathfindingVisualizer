import { useEffect, useState } from 'react';
import { GridContainer } from './grid.styles';
import { NODE_TYPES } from '../../Store/node/node.types';
import { useSelector } from 'react-redux';
import { selectNodeType } from '../../Store/node/node.selector';

import Node from './node.component';

const START_NODE_ROW = 10;
const START_NODE_COL = 10;
const END_NODE_ROW = 10;
const END_NODE_COL = 40;

const Grid = () => {
  const [mouseIsPressed, setMouseIsPressed] = useState(false);
  const [grid, setGrid] = useState([]);
  const selectedNodeType = useSelector(selectNodeType);

  useEffect(() => setGrid(initGrid), []);

  const handleMouseDown = (row, col) => {
    setMouseIsPressed(true);
    setGrid(rerenderGrid(row, col));
  };

  const handleMouseEnter = (row, col) => {
    if (!mouseIsPressed) return;
    setGrid(rerenderGrid(row, col));
  };

  const handleMouseUp = () => {
    setMouseIsPressed(false);
  };

  const rerenderGrid = (row, col) => {
    const newGrid = grid.slice();
    const node = newGrid[row][col];
    const newNode = {
      ...node,
      nodeType: selectedNodeType,
    };
    newGrid[row][col] = newNode;
    return newGrid;
  };

  return (
    <GridContainer>
      {grid.map((row, idx) =>
        row.map((node, colID) => {
          const { row, col, nodeType } = node;
          return (
            <Node
              key={colID}
              row={row}
              col={col}
              nodeType={nodeType}
              onMouseDown={(row, col) => handleMouseDown(row, col)}
              onMouseUp={handleMouseUp}
              onMouseEnter={(row, col) => handleMouseEnter(row, col)}
            />
          );
        })
      )}
    </GridContainer>
  );
};
export default Grid;

const initGrid = () => {
  const grid = [];
  for (let row = 0; row < 20; row++) {
    const currRow = [];
    for (let col = 0; col < 50; col++) {
      currRow.push(createNode(row, col));
    }
    grid.push(currRow);
  }
  return grid;
};

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
