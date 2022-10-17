import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import TextField from '@mui/material/TextField';
import { isEmpty } from '../../utils/common';

const FormInput = ({ required, label, value, name, className, error, style, onChange }) => {
  return (
    <TextField
      required={required}
      autoComplete={'off'}
      variant="standard"
      className={`form-input ${className}`}
      error={!isEmpty(error)}
      helperText={error}
      label={label}
      defaultValue={label}
      style={style}
      value={value}
      name={name}
      onChange={onChange}
    />
  );
};

FormInput.propTypes = {
  required: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.string,
  isSecure: PropTypes.bool,
  style: PropTypes.object,
  onChange: PropTypes.func
};
export default FormInput;
