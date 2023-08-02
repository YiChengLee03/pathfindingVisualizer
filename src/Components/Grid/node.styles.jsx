import { styled, keyframes } from 'styled-components';

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

const visitedAnimation = keyframes`
  0% {
    transform: scale(0.3);
    background-color: darkolivegreen;
    border-radius: 100%;
  }

  25% {
    background-color: olivedrab;
  }

  50% {
    background-color: seagreen;
  }

  100% {
    transform: scale(1);
    background-color: limegreen;
  }
`;

export const VisitedIcon = styled(BaseIcon)`
  animation-name: ${visitedAnimation};
  animation-duration: 1.5s;
  animation-timing-function: ease-out;
  animation-delay: 0;
  animation-iteration-count: 1;
  animation-direction: alternate;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;
