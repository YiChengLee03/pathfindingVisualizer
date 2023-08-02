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
import OutsideAlerter from '../OutsideAlerter/outside.component';

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
  const nodeTypeList = [
    NODE_TYPES.NORMAL,
    NODE_TYPES.WALL,
    NODE_TYPES.WEIGHTED,
  ];

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
      <OutsideAlerter dropdown='Nodes'>
        <DropdownMenu onClick={toggleDropdown}>
          <Selection>{nodeType}</Selection>
          <ArrowIcon />
        </DropdownMenu>
        {nodeDropdownOpen && (
          <Dropdown>
            {nodeTypeList.map((nodeType, idx) => {
              return (
                <Item key={idx} onClick={() => changeNodeType(nodeType)}>
                  {nodeType}
                </Item>
              );
            })}
          </Dropdown>
        )}
      </OutsideAlerter>
    </NodesContainer>
  );
};

export default Nodes;
