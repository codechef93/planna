import React from 'react';
import PropTypes from 'prop-types';
import Svg_checked from '../../assets/images/icons/radio_selected.svg';
import Svg_unchecked from '../../assets/images/icons/radio_unselected.svg';

const RadioBtn = ({ disabled, checked, onClick }) => {
  return (
    <img
      src={checked == true ? Svg_checked : Svg_unchecked}
      style={{ cursor: 'pointer' }}
      onClick={(e) => {
        if (!disabled) {
          e.preventDefault();
          onClick();
        }
      }}
    />
  );
};

RadioBtn.propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  style: PropTypes.object,
  onClick: PropTypes.func
};
export default RadioBtn;
