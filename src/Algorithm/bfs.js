import { NODE_TYPES } from '../Store/node/node.types';

export const bfs = (grid, startNode, endNode) => {
  const visitedNodesInOrder = [];
  startNode.isVisited = true;
  const unvisitedNeighbours = getUnvisitedNeighbours(startNode, grid);
  while (unvisitedNeighbours.length > 0) {
    const currentNode = unvisitedNeighbours.shift();
    if (currentNode.nodeType === NODE_TYPES.WALL) continue;
    currentNode.isVisited = true;
    visitedNodesInOrder.push(currentNode);
    if (currentNode === endNode) return visitedNodesInOrder;
    const currNodeUnvisitedNeighbours = getUnvisitedNeighbours(
      currentNode,
      grid
    );
    for (const neighbour of currNodeUnvisitedNeighbours) {
      if (unvisitedNeighbours.indexOf(neighbour) === -1) {
        unvisitedNeighbours.push(neighbour);
      }
    }
  }
};

const getUnvisitedNeighbours = (node, grid) => {
  const neighbors = [];
  const { row, col } = node;
  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
  const filteredNeighbours = neighbors.filter(
    (neighbor) => !neighbor.isVisited
  );
  for (const neighbour of filteredNeighbours) {
    neighbour.previousNode = node;
  }
  return filteredNeighbours;
};
