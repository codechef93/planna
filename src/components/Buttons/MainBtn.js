import React from 'react';
import PropTypes from 'prop-types';
import { Button, CircularProgress } from '@mui/material';
import './index.css';

const MainBtn = ({ isLoading, isDisabled = false, title, style, onClick, className }) => {
  return (
    <Button
      disabled={isLoading || isDisabled == true}
      variant="contained"
      className={'app-btn main-btn ' + className}
      style={style}
      onClick={onClick}>
      {isLoading ? <CircularProgress size={24} /> : title}
    </Button>
  );
};

MainBtn.propTypes = {
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  title: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func
};
export default MainBtn;
