import { NODE_TYPES } from '../Store/node/node.types';

export const aStarWeighted = (grid, startNode, endNode) => {
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
  return visitedNodesInOrder;
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
    neighbour.g_cost = getG_Cost(neighbour, grid, endNode);
    neighbour.h_cost = getH_Cost(neighbour, grid, startNode);
    neighbour.f_cost = neighbour.g_cost + 0.3 * neighbour.h_cost;
    neighbour.previousNode = node;
  }
  return filteredNeighbours;
};

const getG_Cost = (node, grid, endNode) => {
  return getCost(node, grid, endNode);
};

const getH_Cost = (node, grid, startNode) => {
  return getCost(node, grid, startNode);
};

const getCost = (node, grid, targetNode) => {
  const delX = targetNode.col - node.col;
  const delY = targetNode.row - node.row;

  let costX = 0;
  const signX = delX > 0 ? 1 : -1;
  for (let i = 0; i < Math.abs(delX); i++) {
    const currNodeType = grid[node.row][node.col + signX * i].nodeType;
    const valToAdd = currNodeType === NODE_TYPES.WEIGHTED ? 10 : 1;
    costX += valToAdd;
  }

  let costY = 0;
  const signY = delY > 0 ? 1 : -1;
  for (let i = 0; i < Math.abs(delY); i++) {
    const currNodeType = grid[node.row + signY * i][node.col].nodeType;
    const valToAdd = currNodeType === NODE_TYPES.WEIGHTED ? 10 : 1;
    costY += valToAdd;
  }

  if (costX + costY === 0 && targetNode.col === 10 && targetNode.row === 10) {
    console.log(node.row, node.col);
  }

  return Math.sqrt(costX * costX + costY * costY);
};

const sortNodesByF_Cost = (neighbours) =>
  neighbours.sort((nodeA, nodeB) => nodeA.f_cost - nodeB.f_cost);
