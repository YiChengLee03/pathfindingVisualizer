import { NODE_TYPES } from '../../Store/node/node.types';

import {
  BaseIcon,
  StartIcon,
  EndIcon,
  WallIcon,
  WeightedIcon,
} from './node.styles';

const getNode = (nodeType = NODE_TYPES.base) => {
  return {
    [NODE_TYPES.NORMAL]: BaseIcon,
    [NODE_TYPES.START]: StartIcon,
    [NODE_TYPES.END]: EndIcon,
    [NODE_TYPES.WALL]: WallIcon,
    [NODE_TYPES.WEIGHTED]: WeightedIcon,
  }[nodeType];
};

const NodeIcon = ({ children, nodeType, ...otherProps }) => {
  const CustomNode = getNode(nodeType);
  return <CustomNode {...otherProps}>{children}</CustomNode>;
};

const Node = (props) => {
  const { row, col, nodeType, onMouseDown, onMouseEnter, onMouseUp } = props;

  return (
    <NodeIcon
      nodeType={nodeType}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseEnter={() => onMouseEnter(row, col)}
      onMouseUp={onMouseUp}
    />
  );
};

export default Node;
