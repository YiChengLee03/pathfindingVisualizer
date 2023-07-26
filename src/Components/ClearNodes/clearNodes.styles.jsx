import { styled } from 'styled-components';

export const BaseButton = styled.button`
  margin: 25px;
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: auto;
  padding: 0 15px 0 15px;
  font-size: 15px;
  background-color: white;
  color: maroon;
  text-transform: uppercase;
  font-family: 'Audiowide', cursive;
  font-weight: bolder;
  border: 3px solid maroon;
  cursor: pointer;
  align-self: center;

  &:hover {
    background-color: maroon;
    color: white;
  }
`;
