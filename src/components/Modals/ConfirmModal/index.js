import React from 'react';
import { Dialog } from '@mui/material';
import PropTypes from 'prop-types';
import './index.css';
import { MainBtn, OutlineBtn } from '../../Buttons';

const ConfirmModal = ({ showModal, title, message, yes='Delete', no='Cancel', onYes, onClose }) => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(showModal);
  }, [showModal]);

  return (
    <Dialog open={open} className={'align-col-middle w100 modal confirm-modal'}>
      <div className={'align-col-middle content'}>
        <div className={'align-col-middle w100 title-view pv2 ph2'}>
          <h2>{title}</h2>
        </div>
        <div className={'w100 align-col-middle ph2 pb2'}>
          <p>{message}</p>
          <div className={'flex_1 align-middle w100 actions mt1'}>
            <div className={'flex_1'}>
              <OutlineBtn
                className={'no_btn'}
                title={no}
                onClick={onClose}
              />
            </div>
            <div style={{ width: 10 }}/>
            <div className={'flex_1'}>
              <MainBtn
                className={'yes_btn'}
                title={yes}
                onClick={onYes}
              />
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

function arePropsEqual(prevProps, nextProps) {
  return (
    prevProps.showModal === nextProps.showModal &&
    prevProps.title === nextProps.title &&
    prevProps.message === nextProps.message &&
    prevProps.yes === nextProps.yes &&
    prevProps.no === nextProps.no
  );
}

ConfirmModal.propTypes = {
  showModal: PropTypes.bool,
  title: PropTypes.string,
  message : PropTypes.string,
  yes: PropTypes.string,
  no: PropTypes.string,
  onYes: PropTypes.func,
  onClose: PropTypes.func
};
export default React.memo(ConfirmModal, arePropsEqual);
