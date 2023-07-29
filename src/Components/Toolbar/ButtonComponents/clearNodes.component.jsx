import { useSelector, useDispatch } from 'react-redux';

import { selectToggleResetGrid } from '../../../Store/grid/grid.selector';
import { resetGrid } from '../../../Store/grid/grid.action';

import { ClearNodesButton } from './button.styles';

const ClearNodes = () => {
  const dispatch = useDispatch();
  const toggle = useSelector(selectToggleResetGrid);

  const handleClearNodes = () => dispatch(resetGrid(!toggle));

  return (
    <ClearNodesButton onClick={handleClearNodes}>Clear Nodes</ClearNodesButton>
  );
};

export default ClearNodes;
