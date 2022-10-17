import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@mui/material';
import { Eye, EyeSlashFill } from '@styled-icons/bootstrap';
import './index.css';
import { Theme } from '../../assets';

const AuthInput = ({ name, text, setRef, placeholder, isSecure, style, onChange }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div style={style} className="input auth-input">
      <div className={'flex_1'}>
        <input
          ref={setRef}
          name={name}
          value={text}
          placeholder={placeholder}
          type={isSecure === true && visible === false ? 'password' : 'text'}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
      </div>
      {isSecure && (
        <IconButton
          className={'eye'}
          onClick={() => {
            setVisible(!visible);
          }}>
          {visible ? (
            <EyeSlashFill size={20} color={Theme.colors.gray5} />
          ) : (
            <Eye size={20} color={Theme.colors.gray5} />
          )}
        </IconButton>
      )}
    </div>
  );
};

AuthInput.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  isSecure: PropTypes.bool,
  style: PropTypes.object,
  onChange: PropTypes.func,
  setRef: PropTypes.object
};
export default AuthInput;
