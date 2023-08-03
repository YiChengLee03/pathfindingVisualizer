import { useSelector } from 'react-redux';
import {
  selectGrid,
  selectStartNode,
  selectEndNode,
} from '../../../Store/grid/grid.selector';
import { selectAlgorithm } from '../../../Store/algo/algo.selector';
import { ALGO_TYPES } from '../../../Store/algo/algo.types';
import { selectSpeed } from '../../../Store/speed/speed.selector';
import { NODE_TYPES } from '../../../Store/node/node.types';

import { aStar } from '../../../Algorithm/aStar';
import { aStarWeighted } from '../../../Algorithm/weightedAstar';
import { bfs } from '../../../Algorithm/bfs';
import { dfs } from '../../../Algorithm/dfs';
import { dijkstra } from '../../../Algorithm/dijkstras';
import { greedy } from '../../../Algorithm/greedy';

import { VisualizeButton } from './button.styles';

const Visualize = () => {
  const grid = useSelector(selectGrid);
  const startNode = useSelector(selectStartNode);
  const endNode = useSelector(selectEndNode);
  const algo = useSelector(selectAlgorithm);
  const speed = useSelector(selectSpeed);

  const getFindingSpeed = () => {
    switch (speed) {
      case 'Fast':
        return 20;
      case 'Medium':
        return 30;
      case 'Slow':
        return 40;
      default:
        return;
    }
  };

  const refreshPreviousPath = () => {
    for (const row of grid) {
      for (const node of row) {
        const doc = document.getElementById(`node-${node.row}-${node.col}`);
        const classList = doc.classList;
        if (
          classList.contains(NODE_TYPES.VISITED) ||
          classList.contains(NODE_TYPES.SHORTEST)
        ) {
          document
            .getElementById(`node-${node.row}-${node.col}`)
            .classList.remove(node.nodeType);
          node.nodeType = NODE_TYPES.NORMAL;
        } else if (
          classList.contains(NODE_TYPES.VISITED_WEIGHTED) ||
          classList.contains(NODE_TYPES.SHORTEST_WEIGHTED)
        ) {
          document.getElementById(
            `node-${node.row}-${node.col}`
          ).className = `node ${NODE_TYPES.WEIGHTED}`;
          node.nodeType = NODE_TYPES.WEIGHTED;
        }
        node.distance = Infinity;
        node.isVisited = false;
        node.previousNode = null;
      }
    }
  };

  const rerenderNode = (node, nodeT) => {
    if (node.nodeType === NODE_TYPES.START || node.nodeType === NODE_TYPES.END)
      return;

    const doc = document.getElementById(`node-${node.row}-${node.col}`);

    if (doc.classList.contains(NODE_TYPES.WEIGHTED)) {
      doc.classList.add(`${nodeT}_Weighted`);
      return;
    }

    document.getElementById(
      `node-${node.row}-${node.col}`
    ).className = `node ${nodeT}`;
    node.nodeType = nodeT;
  };

  const handleOnClick = () => {
    refreshPreviousPath();
    let visitedNodesInOrder = [];
    let nodesInPathOrder = [];
    switch (algo) {
      case ALGO_TYPES.ASTAR:
        visitedNodesInOrder = aStar(grid, startNode, endNode);
        nodesInPathOrder = getNodesInPathOrder(endNode);
        break;

      case ALGO_TYPES.BFS:
        visitedNodesInOrder = bfs(grid, startNode, endNode);
        nodesInPathOrder = getNodesInPathOrder(endNode);
        break;

      case ALGO_TYPES.DFS:
        visitedNodesInOrder = dfs(grid, startNode, endNode);
        nodesInPathOrder = getNodesInPathOrder(endNode);
        break;

      case ALGO_TYPES.DIJKSTRAS:
        visitedNodesInOrder = dijkstra(grid, startNode, endNode);
        nodesInPathOrder = getNodesInPathOrder(endNode);
        break;

      case ALGO_TYPES.GREEDY:
        visitedNodesInOrder = greedy(grid, startNode, endNode);
        nodesInPathOrder = getNodesInPathOrder(endNode);
        break;

      case ALGO_TYPES.ASTAR_WEIGHTED:
        visitedNodesInOrder = aStarWeighted(grid, startNode, endNode);
        nodesInPathOrder = getNodesInPathOrder(endNode);
        break;

      default:
        return;
    }
    animateAlgorithm(visitedNodesInOrder, nodesInPathOrder);
  };

  const getNodesInPathOrder = (finishNode) => {
    const nodesInOrder = [];
    let currentNode = finishNode;
    while (currentNode !== null) {
      nodesInOrder.unshift(currentNode);
      currentNode = currentNode.previousNode;
    }
    return nodesInOrder;
  };

  const animateAlgorithm = (visitedNodesInOrder, nodesInShortestPathOrder) => {
    const findingSpeed = getFindingSpeed();
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          animateShortestPath(nodesInShortestPathOrder);
        }, findingSpeed * i);
        return;
      }
      setTimeout(() => {
        const { row, col, isVisited } = visitedNodesInOrder[i];
        if (isVisited) {
          rerenderNode(grid[row][col], NODE_TYPES.VISITED);
        }
      }, findingSpeed * i);
    }
  };

  const animateShortestPath = (nodesInShortestPathOrder) => {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const { row, col } = nodesInShortestPathOrder[i];
        rerenderNode(grid[row][col], NODE_TYPES.SHORTEST);
      }, 30 * i);
    }
  };

  return <VisualizeButton onClick={handleOnClick}>Visualize</VisualizeButton>;
};

export default Visualize;
