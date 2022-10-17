import React from 'react';
import './index.css';
import PropTypes from 'prop-types';

const RoundIconBtn = ({ icon, style, onClick }) => {
  return (
    <div className={'align-col-middle btn-style round-icon-btn'} style={style} onClick={onClick}>
      {icon}
    </div>
  );
};

RoundIconBtn.propTypes = {
  icon: PropTypes.element,
  style: PropTypes.object,
  onClick: PropTypes.func
};
export default React.memo(RoundIconBtn);
