import { useSelector } from 'react-redux';
import { selectAlgorithm } from '../../../../Store/algo/algo.selector';

import {
  DropdownContainer,
  Header,
  DropdownMenu,
  Selection,
  ArrowIcon,
} from '../DropdownContainer/dropdownContainer.styles';

const Algorithm = () => {
  return (
    <DropdownContainer>
      <Header>Algorithm</Header>
      <DropdownMenu>
        <Selection>Djikstra's Algorithm</Selection>
        <ArrowIcon />
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default Algorithm;
