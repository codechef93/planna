import React from 'react';
import PropTypes from 'prop-types';

const Spacing = ({ height }) => {
  return <div style={{ height: height }} />;
};

function arePropsEqual(prevProps, nextProps) {
  return prevProps.height === nextProps.height;
}

Spacing.propTypes = {
  height: PropTypes.number
};
export default React.memo(Spacing, arePropsEqual);
