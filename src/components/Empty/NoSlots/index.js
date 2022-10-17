import React from 'react';
import './index.css';

const NoSlots = () => {
  return (
    <div className={'align-col-middle no-slots'}>
      <div className={'description'} style={{ marginTop: 16 }}>
        Nothing to show
      </div>
    </div>
  );
};

function arePropsEqual() {
  return true;
}
export default React.memo(NoSlots, arePropsEqual);
