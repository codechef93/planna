import React from 'react';
import { Dialog } from '@mui/material';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import './index.css';

const LoadingModal = ({ showModal }) => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(showModal);
  }, [showModal]);

  return (
    <Dialog open={open} className={'align-col-middle w100 modal loading-modal'}>
      <div className={'align-col-middle content'}>
        <CircularProgress size={36} />
      </div>
    </Dialog>
  );
};

function arePropsEqual(prevProps, nextProps) {
  return prevProps.showModal === nextProps.showModal;
}

LoadingModal.propTypes = {
  showModal: PropTypes.bool
};
export default React.memo(LoadingModal, arePropsEqual);
