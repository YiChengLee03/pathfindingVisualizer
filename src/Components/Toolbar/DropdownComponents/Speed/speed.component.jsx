import { useSelector, useDispatch } from 'react-redux';
import {
  selectSpeed,
  selectIsSpeedDropdownOpen,
} from '../../../../Store/speed/speed.selector';
import { ALGO_SPEED } from '../../../../Store/speed/speed.types';
import {
  setSpeed,
  setIsSpeedDropdownOpen,
} from '../../../../Store/speed/speed.action';

import {
  SpeedContainer,
  Header,
  DropdownMenu,
  Selection,
  ArrowIcon,
  Dropdown,
  Item,
} from '../DropdownContainer/dropdownContainer.styles';

const Speed = () => {
  const dispatch = useDispatch();

  const speed = useSelector(selectSpeed);
  const speedDropdownOpen = useSelector(selectIsSpeedDropdownOpen);
  const speedList = Object.values(ALGO_SPEED);

  const toggleDropdown = () => {
    console.log(speedDropdownOpen);
    console.log('toggled');
    return dispatch(setIsSpeedDropdownOpen(!speedDropdownOpen));
  };

  const changeSpeed = (speed) => {
    toggleDropdown();
    const newSpeed = Object.keys(ALGO_SPEED).find(
      (key) => ALGO_SPEED[key] === speed
    );
    return dispatch(setSpeed(ALGO_SPEED[newSpeed]));
  };

  return (
    <SpeedContainer>
      <Header>Speed</Header>
      {speedDropdownOpen && (
        <Dropdown>
          {speedList.map((speed, idx) => (
            <Item key={idx} onClick={() => changeSpeed(speed)}>
              {speed}
            </Item>
          ))}
        </Dropdown>
      )}
      <DropdownMenu onClick={toggleDropdown}>
        <Selection>{speed}</Selection>
        <ArrowIcon />
      </DropdownMenu>
    </SpeedContainer>
  );
};

export default Speed;
