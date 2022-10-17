import React, { useState } from 'react';
import './index.css';
import PropTypes from 'prop-types';
import { ChevronDown, ChevronUp } from '@styled-icons/heroicons-outline';
import { Theme } from '../../../assets';

const MoreorlessView = ({ children, closedHeight = 80, className }) => {
  const [isOpened, setOpened] = useState(false);
  return (
    <div className={`align-col-middle w100 more-or-less-view ${className}`}>
      <div className={!isOpened ? 'hidden-content' : 'content'} style={isOpened ? {} : { height: closedHeight }}>
        {children}
        {/*{*/}
        {/*  !isOpened && <div className={'overlap'} style={isOpened ? {} : { height: closedHeight }}/>*/}
        {/*}*/}
      </div>
      {
        isOpened ?
          <p className={'action-btn btn-style'} onClick={() => setOpened(false)}>
            See Less <ChevronUp size={16} color={Theme.colors.primary}/>
          </p>
          :
          <p className={'action-btn btn-style'} onClick={() => setOpened(true)}>
            See More <ChevronDown size={16} color={Theme.colors.primary}/>
          </p>
      }
    </div>
  );
};

MoreorlessView.propTypes = {
  children: PropTypes.element,
  closedHeight: PropTypes.number,
  className: PropTypes.string,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func
};

export default MoreorlessView;
