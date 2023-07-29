import { useSelector, useDispatch } from 'react-redux';
import {
  setNodeType,
  setIsNodeDropdownOpen,
} from '../../../../Store/node/node.action';
import {
  selectNodeType,
  selectIsNodeDropdownOpen,
} from '../../../../Store/node/node.selector';
import { NODE_TYPES } from '../../../../Store/node/node.types';

import {
  NodesContainer,
  Header,
  DropdownMenu,
  Selection,
  ArrowIcon,
  Dropdown,
  Item,
} from '../DropdownContainer/dropdownContainer.styles';

const Nodes = () => {
  const dispatch = useDispatch();

  const nodeType = useSelector(selectNodeType);
  const nodeDropdownOpen = useSelector(selectIsNodeDropdownOpen);
  const nodeTypeList = Object.values(NODE_TYPES);

  const toggleDropdown = () =>
    dispatch(setIsNodeDropdownOpen(!nodeDropdownOpen));

  const changeNodeType = (node) => {
    toggleDropdown();
    const newNodeType = Object.keys(NODE_TYPES).find(
      (key) => NODE_TYPES[key] === node
    );
    return dispatch(setNodeType(NODE_TYPES[newNodeType]));
  };

  return (
    <NodesContainer>
      <Header>Nodes</Header>
      {nodeDropdownOpen && (
        <Dropdown>
          {nodeTypeList.map((nodeType, idx) => {
            if (nodeType === 'Start' || nodeType === 'End') return;
            return (
              <Item key={idx} onClick={() => changeNodeType(nodeType)}>
                {nodeType}
              </Item>
            );
          })}
        </Dropdown>
      )}
      <DropdownMenu onClick={toggleDropdown}>
        <Selection>{nodeType}</Selection>
        <ArrowIcon />
      </DropdownMenu>
    </NodesContainer>
  );
};

export default Nodes;
