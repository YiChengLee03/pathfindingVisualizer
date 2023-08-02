import { styled } from 'styled-components';
import { ReactComponent as ArrowSvg } from '../../../../assets/down-arrow.svg';

const DropdownContainer = styled.div`
  position: relative;
  flex: content;
  max-height: fit-content;
`;

export const AlgorithmContainer = styled(DropdownContainer)`
  width: 180px;
`;

export const SpeedContainer = styled(DropdownContainer)`
  width: 100px;
`;

export const NodesContainer = styled(DropdownContainer)`
  width: 100px;
`;

export const Header = styled.h3`
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 0px;
`;

export const Dropdown = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  padding: 10px;
  padding-left: 0%;
  background-color: white;
  top: 85px;
  border: 1px solid gray;
`;

export const DropdownMenu = styled.button`
  display: flex;
  font-family: 'Audiowide';
  align-items: center;
  column-gap: 10px;
  background-color: white;
  border: none;
  cursor: pointer;
  max-height: 30px;
  margin: auto;
  padding: 0%;
`;

export const Selection = styled.h4`
  font-size: small;
`;

export const ArrowIcon = styled(ArrowSvg)`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

export const Item = styled.h4`
  display: flexbox;
  text-align: center;
  font-size: small;
  padding: 5px;
  margin: 0px;
  width: 100%;
  height: fit-content;
`;
