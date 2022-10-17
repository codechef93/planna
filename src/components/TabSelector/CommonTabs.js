import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import './CommonTabs.css';

const CommonTabs = ({ items, item, className, style, onChange }) => {
  const { t } = useTranslation();
  return (
    <div className={'align-middle common-tabs ' + className}>
      {items &&
        items.map((it, index) => (
          <div key={it} className={'flex_1 h100'}>
            <Button
              variant="contained"
              className={`tab-btn tab-btn-${index} ` + (it === item ? 'tab-btn-active' : 'tab-btn-inactive')}
              style={style}
              onClick={() => {
                onChange(it);
              }}>
              {t(it)}
            </Button>
          </div>
        ))}
    </div>
  );
};

function arePropsEqual(prevProps, nextProps) {
  return (
    prevProps.item === nextProps.item &&
    prevProps.items.length === nextProps.items.length &&
    prevProps.items.filter((x) => nextProps.items.indexOf(x) === -1).length === 0 &&
    nextProps.items.filter((x) => prevProps.items.indexOf(x) === -1).length === 0
  );
}

CommonTabs.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  item: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func
};
export default React.memo(CommonTabs, arePropsEqual);
