import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import './index.css';

const SwitchBtn = ({ items, item, style, onChange }) => {
  const { t } = useTranslation();
  return (
    <div className={'switch-btn'}>
      {items &&
        items.map((it) => (
          <div key={it} className={'flex_1'}>
            <Button
              variant="contained"
              className={'app-btn ' + (it === item ? 'active' : 'inactive')}
              style={style}
              onClick={() => {
                onChange(it);
              }}
            >
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

SwitchBtn.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  item: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func
};
export default React.memo(SwitchBtn, arePropsEqual);
