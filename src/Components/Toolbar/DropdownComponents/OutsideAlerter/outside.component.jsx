import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { setIsAlgoDropdownOpen } from '../../../../Store/algo/algo.action';
import { setIsNodeDropdownOpen } from '../../../../Store/node/node.action';
import { setIsSpeedDropdownOpen } from '../../../../Store/speed/speed.action';

const useOutsideAlerter = (ref, dropdown) => {
  const dispatch = useDispatch();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        switch (dropdown) {
          case 'Algorithm':
            return dispatch(setIsAlgoDropdownOpen(false));
          case 'Speed':
            return dispatch(setIsSpeedDropdownOpen(false));
          case 'Nodes':
            return dispatch(setIsNodeDropdownOpen(false));
          default:
            return;
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, dispatch, dropdown]);
};

const OutsideAlerter = (props) => {
  const wrapperRef = useRef(null);
  const dropdown = props.dropdown;
  useOutsideAlerter(wrapperRef, dropdown);

  return <div ref={wrapperRef}>{props.children}</div>;
};

OutsideAlerter.propTypes = {
  children: PropTypes.element.isRequired,
};

export default OutsideAlerter;
