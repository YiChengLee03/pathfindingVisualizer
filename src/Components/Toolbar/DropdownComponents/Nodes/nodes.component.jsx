import {
  DropdownContainer,
  Header,
  DropdownMenu,
  Selection,
  ArrowIcon,
} from '../DropdownContainer/dropdownContainer.styles';

const Nodes = () => {
  return (
    <DropdownContainer>
      <Header>Nodes</Header>
      <DropdownMenu>
        <Selection>Wall</Selection>
        <ArrowIcon />
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default Nodes;
