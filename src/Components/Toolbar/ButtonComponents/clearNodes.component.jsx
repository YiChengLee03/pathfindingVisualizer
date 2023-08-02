import { useSelector } from 'react-redux';

import { selectGrid } from '../../../Store/grid/grid.selector';

import { ClearNodesButton } from './button.styles';
import { NODE_TYPES } from '../../../Store/node/node.types';

const ClearNodes = () => {
  const grid = useSelector(selectGrid);

  const rerenderGrid = () => {
    for (const row of grid) {
      for (const node of row) {
        if (
          node.nodeType !== NODE_TYPES.START &&
          node.nodeType !== NODE_TYPES.END
        ) {
          document.getElementById(
            `node-${node.row}-${node.col}`
          ).className = `node ${NODE_TYPES.NORMAL}`;
          node.nodeType = NODE_TYPES.NORMAL;
        }
        node.distance = Infinity;
        node.isVisited = false;
        node.previousNode = null;
      }
    }
  };

  const handleClearNodes = () => rerenderGrid();

  return (
    <ClearNodesButton onClick={handleClearNodes}>Clear Nodes</ClearNodesButton>
  );
};

export default ClearNodes;
