import { styled } from 'styled-components';

export const BaseIcon = styled.div`
  width: 25px;
  height: 25px;
  outline: 1px solid #afd8f8;
  display: inline-block;
`;

export const StartIcon = styled(BaseIcon)`
  background-color: green;
`;

export const EndIcon = styled(BaseIcon)`
  background-color: red;
`;

export const WallIcon = styled(BaseIcon)`
  background-color: black;
`;

export const WeightedIcon = styled(BaseIcon)`
  background-color: gray;
`;
