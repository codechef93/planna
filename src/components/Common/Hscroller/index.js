import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

import useDrag from './useDrag';
import PropTypes from 'prop-types';

function Hscroller({ children }) {
  const { dragStart, dragStop, dragMove } = useDrag();
  const handleDrag =
    ({ scrollContainer }) =>
    (ev) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  return (
    <div onMouseLeave={dragStop} style={{ width: '100%' }}>
      <ScrollMenu
        onWheel={onWheel}
        onMouseDown={() => dragStart}
        onMouseUp={() => dragStop}
        onMouseMove={handleDrag}>
        {children}
      </ScrollMenu>
    </div>
  );
}
export default Hscroller;

function onWheel(apiObj, ev) {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

Hscroller.propTypes = {
  children: PropTypes.element
};
