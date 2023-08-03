import { useSelector } from 'react-redux';
import { selectAlgorithm } from '../../Store/algo/algo.selector';
import { ALGO_TYPES } from '../../Store/algo/algo.types';

import { DescriptionContainer } from './description.styles';

const Description = () => {
  const algorithm = useSelector(selectAlgorithm);

  const checkWeighted = (algorithm) => {
    switch (algorithm) {
      case ALGO_TYPES.ASTAR:
      case ALGO_TYPES.ASTAR_WEIGHTED:
      case ALGO_TYPES.DIJKSTRAS:
        return true;
      case ALGO_TYPES.BFS:
      case ALGO_TYPES.DFS:
      case ALGO_TYPES.GREEDY:
        return false;
      default:
        return false;
    }
  };

  const checkShortestPath = (algorithm) => {
    switch (algorithm) {
      case ALGO_TYPES.ASTAR:
      case ALGO_TYPES.ASTAR_WEIGHTED:
      case ALGO_TYPES.DIJKSTRAS:
      case ALGO_TYPES.BFS:
        return 'guarantees';
      case ALGO_TYPES.DFS:
      case ALGO_TYPES.GREEDY:
        return 'does not guarantee';
      default:
        return 'guarantees';
    }
  };

  const weighted = checkWeighted(algorithm) ? 'weighted' : 'unweighted';
  const shortestPath = checkShortestPath(algorithm);

  return (
    <DescriptionContainer>
      {algorithm} is <u>{weighted}</u> and <u>{shortestPath}</u> the shortest
      path
    </DescriptionContainer>
  );
};

export default Description;
