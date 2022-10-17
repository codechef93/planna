import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@mui/material';
import { Close } from '@styled-icons/evaicons-solid';
import './index.css';
import { Theme } from '../../assets';

const SearchInput = ({ value, icon, placeholder, style, onChange }) => {
  const [text, setText] = useState(value || '');

  useEffect(() => {
    setText(value || '');
  }, [value]);

  return (
    <div style={style} className="input search-input">
      <div className={text.length > 0 ? 'active-icon' : 'icon'}>{icon}</div>
      <input
        placeholder={placeholder}
        type={'text'}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          onChange(e.target.value);
        }}
      />
      {text.length > 0 && (
        <IconButton
          style={{ padding: 4 }}
          onClick={() => {
            setText('');
            onChange('');
          }}
        >
          <Close size={20} color={Theme.colors.text} />
        </IconButton>
      )}
    </div>
  );
};

SearchInput.propTypes = {
  value: PropTypes.string,
  icon: PropTypes.element,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func
};
export default React.memo(SearchInput);
