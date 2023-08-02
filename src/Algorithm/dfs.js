import { NODE_TYPES } from '../Store/node/node.types';

export const dfs = (grid, startNode, endNode) => {
  const visitedNodesInOrder = [];
  dfsHelper(startNode, endNode, grid, visitedNodesInOrder);
  return visitedNodesInOrder;
};

const dfsHelper = (node, endNode, grid, visitedNodesInOrder) => {
  if (node.nodeType === NODE_TYPES.WALL) return false;
  if (node === endNode) return true;

  node.isVisited = true;
  visitedNodesInOrder.push(node);

  const { row, col } = node;
  const nodeAbove = row > 0 ? grid[row - 1][col] : null;
  const nodeBelow = row < grid.length - 1 ? grid[row + 1][col] : null;
  const nodeLeft = col > 0 ? grid[row][col - 1] : null;
  const nodeRight = col < grid[0].length - 1 ? grid[row][col + 1] : null;

  let result = false;

  if (nodeAbove !== null && !nodeAbove.isVisited) {
    nodeAbove.previousNode = node;
    result = dfsHelper(nodeAbove, endNode, grid, visitedNodesInOrder);
    if (result) return true;
  }

  if (nodeRight !== null && !nodeRight.isVisited) {
    nodeRight.previousNode = node;
    result = dfsHelper(nodeRight, endNode, grid, visitedNodesInOrder);
    if (result) return true;
  }

  if (nodeBelow !== null && !nodeBelow.isVisited) {
    nodeBelow.previousNode = node;
    result = dfsHelper(nodeBelow, endNode, grid, visitedNodesInOrder);
    if (result) return true;
  }

  if (nodeLeft !== null && !nodeLeft.isVisited) {
    nodeLeft.previousNode = node;
    result = dfsHelper(nodeLeft, endNode, grid, visitedNodesInOrder);
    if (result) return true;
  }

  // return result;
};
