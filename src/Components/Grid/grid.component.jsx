import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectGrid } from '../../Store/grid/grid.selector';
import { setGrid } from '../../Store/grid/grid.action';
import { selectNodeType } from '../../Store/node/node.selector';

import Node from './node.component';

import { GridContainer } from './grid.styles';

const Grid = () => {
  const dispatch = useDispatch();

  const grid = useSelector(selectGrid);
  const selectedNodeType = useSelector(selectNodeType);

  const [isMousePressed, setIsMousePressed] = useState(false);

  const handleMouseDown = (row, col) => {
    setIsMousePressed(true);
    return dispatch(setGrid(rerenderGrid(row, col)));
  };

  const handleMouseEnter = (row, col) => {
    if (!isMousePressed) return;
    return dispatch(setGrid(rerenderGrid(row, col)));
  };

  const handleMouseUp = () => setIsMousePressed(false);

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
