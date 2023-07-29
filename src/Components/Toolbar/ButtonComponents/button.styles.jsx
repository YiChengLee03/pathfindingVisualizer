import { styled } from 'styled-components';

const BaseButton = styled.button`
  margin: 25px 25px 0px 25px;
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  padding: 0 15px 0 15px;
  font-size: 15px;
  background-color: white;
  text-transform: uppercase;
  font-family: 'Audiowide', cursive;
  font-weight: bolder;
  cursor: pointer;
`;

export const ClearNodesButton = styled(BaseButton)`
  color: maroon;
  border: 3px solid maroon;

  &:hover {
    background-color: maroon;
    color: white;
  }
`;

export const VisualizeButton = styled(BaseButton)`
  color: seagreen;
  border: 3px solid seagreen;

  &:hover {
    background-color: seagreen;
    color: white;
  }
`;
