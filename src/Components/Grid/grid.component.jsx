import { useState } from 'react';
import { useSelector } from 'react-redux';
import Node from './node.component';

import { selectGrid } from '../../Store/grid/grid.selector';
import { selectNodeType } from '../../Store/node/node.selector';

import { GridContainer } from './grid.styles';

const Grid = () => {
  const grid = useSelector(selectGrid);
  const selectedNodeType = useSelector(selectNodeType);

  const [isMousePressed, setIsMousePressed] = useState(false);

  const handleMouseDown = (row, col) => {
    setIsMousePressed(true);
    rerenderNode(grid[row][col], selectedNodeType);
  };

  const handleMouseEnter = (row, col) => {
    if (!isMousePressed) return;
    rerenderNode(grid[row][col], selectedNodeType);
  };

  const handleMouseUp = () => setIsMousePressed(false);

  const rerenderNode = (node, nodeT) => {
    document.getElementById(
      `node-${node.row}-${node.col}`
    ).className = `node ${nodeT}`;
    node.nodeType = nodeT;
  };

  return (
    <GridContainer onMouseUp={handleMouseUp}>
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
              onMouseEnter={(row, col) => handleMouseEnter(row, col)}
            />
          );
        })
      )}
    </GridContainer>
  );
};

export default Grid;
