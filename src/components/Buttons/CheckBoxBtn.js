import React from 'react';
import PropTypes from 'prop-types';
import Svg_checked from '../../assets/images/icons/checkbox_selected.svg';
import Svg_unchecked from '../../assets/images/icons/checkbox_unselected.svg';

const CheckBoxBtn = ({ checked, onClick }) => {
  return (
    <img
      src={checked === true ? Svg_checked : Svg_unchecked}
      style={{ cursor: 'pointer' }}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    />
  );
};

CheckBoxBtn.propTypes = {
  checked: PropTypes.bool,
  style: PropTypes.object,
  onClick: PropTypes.func
};
export default React.memo(CheckBoxBtn);
