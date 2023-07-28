import { styled } from 'styled-components';

export const BaseButton = styled.button`
  margin: 25px 25px 0px 25px;
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  padding: 0 15px 0 15px;
  font-size: 15px;
  background-color: white;
  color: seagreen;
  border: 3px solid seagreen;
  text-transform: uppercase;
  font-family: 'Audiowide', cursive;
  font-weight: bolder;
  cursor: pointer;

  &:hover {
    background-color: seagreen;
    color: white;
  }
`;
