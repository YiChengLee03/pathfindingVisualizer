import { NODE_TYPES } from '../Store/node/node.types';

export const dijkstra = (grid, startNode, endNode) => {
  const visitedNodesInOrder = [];
  startNode.distance = 0;
  const unvisitedNodes = getAllNodes(grid);
  while (unvisitedNodes.length > 0) {
    sortNodesByDistance(unvisitedNodes);
    const currentNode = unvisitedNodes.shift();
    const currNodeType = currentNode.nodeType;
    if (currNodeType === NODE_TYPES.WALL) continue;
    if (currentNode.distance === Infinity) return visitedNodesInOrder;
    currentNode.isVisited = true;
    visitedNodesInOrder.push(currentNode);
    if (currentNode === endNode) return visitedNodesInOrder;
    updateUnvisitedNeighbours(currentNode, grid);
  }
};

const getAllNodes = (grid) => {
  const nodes = [];
  for (const row of grid) {
    for (const node of row) {
      nodes.push(node);
    }
  }
  return nodes;
};

const sortNodesByDistance = (unvisitedNodes) =>
  unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);

const getUnvisitedNeighbours = (node, grid) => {
  const neighbors = [];
  const { col, row } = node;
  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
  return neighbors.filter((neighbor) => !neighbor.isVisited);
};

const updateUnvisitedNeighbours = (node, grid) => {
  const unvisitedNeighbours = getUnvisitedNeighbours(node, grid);
  for (const neighbour of unvisitedNeighbours) {
    if (neighbour.nodeType === NODE_TYPES.WEIGHTED) {
      neighbour.distance = node.distance + 10;
    } else {
      neighbour.distance = node.distance + 1;
    }
    neighbour.previousNode = node;
  }
};
