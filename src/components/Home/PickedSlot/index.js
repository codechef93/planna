import React from 'react';
import moment from 'moment';
import './index.css';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import Svg_edit from '../../../assets/images/icons/edit-icon.svg';
import Svg_delete from '../../../assets/images/icons/delete-icon.svg';

const PickedSlot = ({ slot, className, onEdit, onDelete }) => {
  return (
    <div className={`picked-timeslot ${className}`}>
      <div className={'date'}>{moment(slot.start).format('ddd, MMM DD, YYYY')}</div>
      <div className={'time mt1'}>{moment(slot.start).format('h:mm A')} - {moment(slot.end).format('h:mm A')}</div>
      <div className={'align-middle'} style={{justifyContent : 'flex-start'}}>
        <IconButton onClick={onEdit}>
          <img src={Svg_edit}/>
        </IconButton>
        <IconButton onClick={onDelete}>
          <img src={Svg_delete}/>
        </IconButton>
      </div>
    </div>
  );
};

PickedSlot.propTypes = {
  slot: PropTypes.shape({
    start: PropTypes.string,
    end: PropTypes.string
  }),
  className: PropTypes.string,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func
};

export default PickedSlot;
