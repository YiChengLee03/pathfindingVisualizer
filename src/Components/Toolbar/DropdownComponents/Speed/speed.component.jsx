import {
  DropdownContainer,
  Header,
  DropdownMenu,
  Selection,
  ArrowIcon,
} from '../DropdownContainer/dropdownContainer.styles';

const Speed = () => {
  return (
    <DropdownContainer>
      <Header>Speed</Header>
      <DropdownMenu>
        <Selection>Medium</Selection>
        <ArrowIcon />
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default Speed;
