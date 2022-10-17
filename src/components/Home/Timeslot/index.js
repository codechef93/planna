import React from 'react';
import moment from 'moment';
import './index.css';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';

const Timeslot = ({ slot, isSelected, isDisabled, className, onSelect }) => {
  return (
    <Button
      disabled={isDisabled == true}
      variant="contained"
      className={`time-slot-item-${isDisabled ? 'disabled' : isSelected ? 'selected' : 'unselected'} ` + className}
      onClick={() => {
        if (isDisabled != true) {
          onSelect(slot);
        }
      }}
    >
      {moment(slot.start).format('h:mm A')}
    </Button>
  );
};

Timeslot.propTypes = {
  slot: PropTypes.shape({
    start: PropTypes.string
  }),
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func
};

export default Timeslot;
