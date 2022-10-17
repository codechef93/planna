import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { FormControl, Select, MenuItem } from '@mui/material';
import './index.css';

const SelectInput = ({ values, value, style, handleChange }) => {
  const { t } = useTranslation();
  return (
    <div className="input select-input" style={style}>
      <FormControl sx={{ minWidth: 80 }}>
        <Select value={value} onChange={handleChange} autoWidth>
          {values &&
            values.map((it) => (
              <MenuItem key={it} value={it}>
                {t(it)}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
};

function arePropsEqual(prevProps, nextProps) {
  return (
    prevProps.value === nextProps.value &&
    prevProps.values.length === nextProps.values.length &&
    nextProps.values.filter((x) => prevProps.values.indexOf(x) === -1).length === 0 &&
    prevProps.values.filter((x) => nextProps.values.indexOf(x) === -1).length === 0 &&
    prevProps.handleChange === nextProps.handleChange
  );
}

SelectInput.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  style: PropTypes.object,
  handleChange: PropTypes.func
};
export default React.memo(SelectInput, arePropsEqual);
