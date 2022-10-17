import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import './index.css';

const OutlineBtn = ({ title, style, className, onClick }) => {
  return (
    <Button variant="outlined" className={`app-btn outline-btn ${className}`} style={style} onClick={onClick}>
      {title}
    </Button>
  );
};

function arePropsEqual(prevProps, nextProps) {
  return !prevProps.title !== nextProps.title;
}

OutlineBtn.propTypes = {
  title: PropTypes.string,
  className : PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func
};
export default React.memo(OutlineBtn, arePropsEqual);
