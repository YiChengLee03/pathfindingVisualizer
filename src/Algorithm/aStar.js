import { NODE_TYPES } from '../Store/node/node.types';

export const aStar = (grid, startNode, endNode) => {
  const visitedNodesInOrder = [];
  startNode.isVisited = true;
  const unvisitedNeighbours = getUnvisitedNeighbours(
    startNode,
    grid,
    startNode,
    endNode
  );
  while (unvisitedNeighbours.length > 0) {
    sortNodesByF_Cost(unvisitedNeighbours);
    const currentNode = unvisitedNeighbours.shift();
    if (currentNode.nodeType === NODE_TYPES.WALL) continue;
    currentNode.isVisited = true;
    visitedNodesInOrder.push(currentNode);
    if (currentNode === endNode) return visitedNodesInOrder;
    const currNodeUnvisitedNeighbours = getUnvisitedNeighbours(
      currentNode,
      grid,
      startNode,
      endNode
    );
    for (const neighbour of currNodeUnvisitedNeighbours) {
      if (unvisitedNeighbours.indexOf(neighbour) === -1) {
        unvisitedNeighbours.push(neighbour);
      }
    }
  }
};

const getUnvisitedNeighbours = (node, grid, startNode, endNode) => {
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
    neighbour.g_cost = getG_Cost(neighbour, endNode);
    neighbour.h_cost = getH_Cost(neighbour, startNode);
    neighbour.f_cost = neighbour.g_cost + neighbour.h_cost;
    neighbour.previousNode = node;
  }
  return filteredNeighbours;
};

const getG_Cost = (node, endNode) => {
  const delX = endNode.col - node.col;
  const delY = endNode.row - node.row;
  return Math.sqrt(delX * delX + delY * delY);
};

const getH_Cost = (node, startNode) => {
  const delX = startNode.col - node.col;
  const delY = startNode.row - node.row;

  // let costX = 0;
  // if (delX > 0) {
  //   for (let i = 0; i < delX; i++) {
  //     node[node.row][node.col - i];
  //   }
  // }

  return Math.sqrt(delX * delX + delY * delY);
};

const sortNodesByF_Cost = (neighbours) =>
  neighbours.sort((nodeA, nodeB) => nodeA.f_cost - nodeB.f_cost);
