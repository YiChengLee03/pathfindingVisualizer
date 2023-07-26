import { styled } from 'styled-components';

export const BaseButton = styled.button`
  margin: 25px;
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: white;
  color: seagreen;
  border: 2px solid seagreen;
  text-transform: uppercase;
  font-family: 'Audiowide', cursive;
  font-weight: bolder;
  cursor: pointer;
  align-self: center;

  &:hover {
    background-color: seagreen;
    color: white;
  }
`;
