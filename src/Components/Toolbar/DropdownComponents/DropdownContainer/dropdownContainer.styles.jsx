import { styled } from 'styled-components';
import { ReactComponent as ArrowSvg } from '../../../../assets/down-arrow.svg';

export const DropdownContainer = styled.div`
  flex: content;
  max-height: fit-content;
`;

export const Header = styled.h3`
  text-transform: uppercase;
  margin-bottom: 0px;
`;

export const DropdownMenu = styled.button`
  display: flex;
  font-family: 'Audiowide';
  align-items: center;
  column-gap: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  max-height: 30px;
  padding: 0%;
`;

export const Selection = styled.h4`
  font-size: small;
`;

export const ArrowIcon = styled(ArrowSvg)`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
